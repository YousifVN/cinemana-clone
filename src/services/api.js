import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

if (!apiKey) {
  console.error("TMDB API key is not set. Please check your .env file.");
}

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
  },
});

export default api;
