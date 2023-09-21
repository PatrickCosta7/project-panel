import axios from "axios";

const moviesApi = axios.create({ baseURL: "http://localhost:8001/movies" });

async function getMovies() {
    const response = await moviesApi.get('/');

    return response.data;
}

export { getMovies }
