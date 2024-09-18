import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import css from '../MovieList/MovieList.module.css'

export default function MovieList({ movies }) {
  return (
    <ul  className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.movieItem}>
          <MovieCard movie={movie}  />
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      title: PropTypes.string.isRequired,  
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

