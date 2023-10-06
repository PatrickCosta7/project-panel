import axios from "axios";

const moviesApi = axios.create({ baseURL: "http://localhost:8001/movies" });

async function getMovies() {
    const response = await moviesApi.get('/');

    return response.data;
}

async function deleteMovie(id) {
    await moviesApi.delete(`/${id}`)
}

async function postMovie(objeto) {
    await moviesApi.post('/', objeto)
}

async function patchMovie(id, objeto) {
    await moviesApi.patch(`/${id}`, objeto)
}

export { getMovies, deleteMovie, postMovie, patchMovie }
