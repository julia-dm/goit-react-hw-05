import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from "./MovieCard.module.css";

export default function MovieCard({ movie: {id, title, poster_path } }) {
  const location =useLocation();
  return (
    <Link to={`/movies/${id}`} className={css.movieCard} state={location}>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
      <p className={css.movieTitle}>{title}</p>
    </Link>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired,  
    poster_path: PropTypes.string,
  }).isRequired,
};