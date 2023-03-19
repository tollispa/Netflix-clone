import Main from '../pages/Main'
import Row from '../components/Row'

function Home() {
  const key = 'b226a94feb8473c86eca8b6943c64eed'
    return (
        <>
        <Main/>
        <Row rowID="1"title ='Up Coming' fetchURL={`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`}/>
        <Row rowID="2"title ='Top Rated' fetchURL={`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`}/>
        <Row rowID="3"title ='Popular' fetchURL={`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`}/>
        <Row rowID="4"title ='Horror' fetchURL={`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`}/>
        <Row rowID="5"title ='Comedy' fetchURL={`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`}/>
        <Row rowID="6"title ='Romantic' fetchURL={`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`}/>


        



        </>
      );
}

export default Home;