import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'


const SingleMovie = () => {
    const key = 'b226a94feb8473c86eca8b6943c64eed'
const {moviesID} = useParams();
const [product, setProduct] = useState([])

useEffect(()=> {
    async function fetchMovies()  {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${moviesID}?api_key=${key}&language=en-US
        `)
        const data = await res.json()
        
        setProduct(data)
        console.log(product)
       
       
    }
       
    fetchMovies()
    },[])
    


   

    return (
        <div class="bg-gray-900 py-14">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/3 px-4 mb-4">
              <img src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} alt={product.original_title} class="w-full rounded-lg shadow-lg" />
            </div>
            <div class="w-full lg:w-2/3 px-4">
              <h1 class="text-white font-bold text-2xl mb-2">{product.original_title}</h1>
              <p class="text-gray-400 text-sm mb-4">Release Date: {product.release_date}</p>
              <p class="text-gray-400 mb-4">{product.overview}</p>
              <div class="flex items-center">
                <svg class="fill-current text-yellow-500 w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <g data-name="Layer 2">
                    <path d="M22,9.37a1,1,0,0,0-.29-.71L18.17,5.7l1.74-6a1,1,0,0,0-.15-.93A1,1,0,0,0,18,0H6a1,1,0,0,0-.76.35,1,1,0,0,0-.13.93l1.74,6L2.29,8.66A1,1,0,0,0,2,9.37L3.85,13,2,16.62a1,1,0,0,0,.29,1.09A1,1,0,0,0,3,18l4-1.1,4,1.1a1,1,0,0,0,.57,0,1,1,0,0,0,.52-.43,1,1,0,0,0,.15-.66l-1.1-4,3.39-2.48A1,1,0,0,0,22,9.37ZM9.71,14.62l-2.6,1.72.92-3.4a1,1,0,0,0-.29-.93L3.55,9.83H8.73a1,1,0,0,0,.8-.41L12,6.68l1.47,5.28a1,1,0,0,0,.8.41H22l-4,2.92a1,1,0,0,0-.29.71l-.92,3.4Z"/>
                  </g>
                </svg>
                <p class="text-gray-400 text-sm mr-4">{product.vote_average}/10 ({product.vote_count} votes)</p>
                <a href={`https://www.themoviedb.org/movie/${product.id}`} target="_blank" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">View on TMDB</a>
                <a href="/" class="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full">Back</a>

              </div>
            </div>
          </div>
        </div>
      </div>
      
           
    )
}

export default SingleMovie