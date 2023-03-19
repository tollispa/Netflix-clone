import axios from 'axios'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import {useState, useEffect} from "react"
import {MdChevronLeft, MdChevronRight} from "react-icons/md"
import {Link} from "react-router-dom"



const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovie] = useState([])
    const [like,setLike] = useState(false)
    
    useEffect(() => {
axios.get(fetchURL).then((res) => {
    setMovie(res.data.results)
})
    }, [fetchURL])
    const slideLeft = () => {
        const slider = document.getElementById("slider" + rowID)
        slider.scrollLeft = slider.scrollLeft -500;
    }
    const slideRight = () => {
        const slider = document.getElementById("slider" + rowID)
        slider.scrollLeft = slider.scrollLeft +500;
    }

   
    
    return (
        <>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        
        
        <div className="relative flex items-center group">
            <MdChevronLeft
            onClick={slideLeft}
            
            className ="bg-white left-0 top-12 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
            <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-none relative" style={{ '--scrollbar-thumb-color': 'black' }}>
                {movies.map((item, id) => (<Link to={`/movie/${item.id}`} className="text-white">
                    
                    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                        <img className="w-full h-auto block"src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}></img>
                        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                            <p  className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center overflow: hidden">
                                {item?.title}
                                </p>
                             
                                
                                <p>
                                    {like ? <FaHeart className="absolute top-4 left-4 text-gray-300"/> : <FaRegHeart className="absolute top-4 left-4 text-gray-300"/>}
                                </p>

                        </div>
                        
                        </div>
                        </Link>
                ))}

            </div>
            <MdChevronRight onClick={slideRight}className ="bg-white right-0 top-12 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"size={40}/>

        </div>
        </>
    )
}

export default Row