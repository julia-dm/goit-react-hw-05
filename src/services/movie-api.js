import axios from 'axios';
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmE4MjExYTU1MmQ0ZWYzMDM4MmM0NGQ5NzE0ZDBlYyIsIm5iZiI6MTcyNjEyODAzMi4xNjM1NjcsInN1YiI6IjY2ZGY1ZTI0ZTA1MDA5NTQ5MWMyNjgxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sa81PiWNpUUBYMVx49MCIdl_LuUGn9MAIp0YLw_vp5E";

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get("/trending/movie/day", {
      params: { language: 'en-US' },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const getSearchMovie = async (query, page = 1) => {
  try {
    const response = await axios.get("/search/movie", {
      params: {
        query,                
        include_adult: false, 
        language: 'en-US',    
        page
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}`, {
      params: {              
        include_adult: false, 
        language: 'en-US',    
       
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`, {
      params: {              
        language: 'en-US',    
       
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`, {
      params: {              
        language: 'en-US',    
       
      },
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
