import PropTypes from 'prop-types';
import { useEffect, useState ,useRef} from 'react';
import { NavLink,Link, useParams ,Outlet, useLocation} from 'react-router-dom';
import { getMovieDetails } from '../../services/movie-api';
import Loader from '../../components/Loader/Loader';
import css from '../MovieDetailsPage/MovieDetailsPage.module.css'
import clsx from "clsx";

const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};


export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const location=useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function fetchData() {
      setLoading(true); 
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data); 
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false); 
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current} className={css.btnBack}>Come back</Link>

      {loading && <Loader />}  
      
      {!loading && !movie && <p>No movie data available.</p>} 
      
      {!loading && movie && (  
        <div className={css.deatails}>
         <div>
         <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
         </div>
         <div className={css.detailsDescr}>
         <h2>{movie.title} {movie.release_date.substr(0, 4)}</h2>

         <p> Popularity:{Math.floor(movie.vote_average * 10)}%</p>
         <h2>Genres:</h2>
          <p> {movie.genres.map(genre => genre.name).join(", ")}</p>
          <h2>Overview:</h2>
          <p> {movie.overview}</p>
         
         </div>
        </div>
      )}
{movie && (
    <div className={css.additionalInfo}>
        <h3 className={css.additionalTitle}>Additional information</h3>
        <li >
          <NavLink to="cast" className={getNavLinkClass}>Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={getNavLinkClass}>Reviews</NavLink>
        </li>
      </div>
      )}
      <Outlet />
    </div>
      
  );
}

MovieDetails.propTypes = {
  movieId: PropTypes.string,
};