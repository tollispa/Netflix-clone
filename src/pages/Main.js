import {useEffect, useState} from 'react';

function Main() {

    const key = 'b226a94feb8473c86eca8b6943c64eed'
const [movies, setProduct] = useState([])
const randomIndex = movies[Math.floor(Math.random() * movies.length)];




useEffect(()=> {
async function fetchMovies()  {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
    const data = await res.json()
    
    setProduct(data.results)
    console.log(data)
   
}
   
fetchMovies()
},[])

      const trundcateString = (str, num) => {
        if(str?.length > num) {
            return str.slice(0, num) + '...'

        }else {
            return str;
        }
      }

    return ( 
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
               
                <img className='w-full h-full object-cover'src={`https://image.tmdb.org/t/p/original/${randomIndex?.backdrop_path}`} alt={movies?.title} />
<div className='absolute w-full top-[20%] p-4 md:p-8'>
    <h1 className="text-3xl md:text-5xl font-bold">{randomIndex?.title}

    </h1>
<div>
    <button className="border bg-gray-300 opacity-70 text-black border-grey-300 py-2 px-5">Play</button>
    <button className="border  text-white border-gray-300  ml-4 py-2 px-5">Watch Later</button>

</div>
<p className=" onClick={alerted}text-gray-400 text-sm">Released: {randomIndex?.release_date}</p>
<p className="w-full md:max-w-[70%] text-gray-200 xl:max-w-[35%]">{trundcateString(randomIndex?.overview, 150)}</p>
</div>

            </div>
        </div>
     );
}

export default Main;