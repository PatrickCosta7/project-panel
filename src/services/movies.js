import axios from "axios";

const moviesApi = axios.create({ baseURL: "http://localhost:8001/movies" });

async function getMovies() {
    const response = await moviesApi.get('/');

    return response.data;
}

async function deleteMovie(id) {
    await moviesApi.delete(`/${id}`)
}

async function postMovie() {
    await moviesApi.post('/')
}

export { getMovies, deleteMovie, postMovie }
