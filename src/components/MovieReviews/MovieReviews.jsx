import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from "../../services/movie-api";
import css from '../MovieReviews/MovieReviews.module.css'

export default function MovieReview() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <div>
     {reviews.length > 0 ? (
        <ul className={css.reviewDescr}>
          {reviews.map((review) => (
            <li key={review.id}>
          
              <h2> Name: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
}