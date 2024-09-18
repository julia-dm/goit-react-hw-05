import { lazy,Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import './App.css';

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("../../pages/MoviePage/MoviePage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFound = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReview = lazy(() => import("../MovieReviews/MovieReviews"));
const Loader = lazy(() => import("../Loader/Loader"));


export default function App() {
  return (
    <div>
      <Navigation  />
      < Suspense fallback={<Loader/>}>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReview />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </Suspense>
    </div>
  );
}