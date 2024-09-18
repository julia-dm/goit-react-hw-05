import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";  
import { getSearchMovie } from "../../services/movie-api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from '../../components/Loader/Loader';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [params] = useSearchParams();

  const query = params.get("query") ?? "";  

  useEffect(() => {
    if (!query) return; 

    async function fetchData() {
      setLoading(true);
      try {
        const data = await getSearchMovie(query); 
        if (data.results.length === 0) {
          setError("No movies found for this search.");
        } else {
          setMovies(data.results); 
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query]);  

 

  return (
    <div>
      <SearchBar />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}