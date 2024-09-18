import { useEffect, useState } from "react";
import Loader from '../../components/Loader/Loader';
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../services/movie-api";  
import css from '../HomePage/HomePage.module.css'

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData()
     {
      setLoading(true); 
      try{
        const data = await getTrendingMovies();
        setMovies(data.results); 
      }
      catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false); 
      }
      
    }
    

    fetchData();
  }, []);

  return (
    <div >
<h1 className={css.trendingToday}>Trending today</h1>
{loading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}