import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/movie-api';
import css from '../MovieCast/MovieCast.module.css'
export default function MovieDetails() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMovieCast(movieId);
        setCast(data.cast)
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <div>
      
     {cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
             <h3 className={css.castDescr}>{actor.name}</h3>
              <p  className={css.castDescr}> Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast available for this movie.</p>
      )}
    </div>
  );
}

MovieDetails.propTypes = {
  movieId: PropTypes.string,
};