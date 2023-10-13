import { createContext, useEffect, useState } from "react";
import { getMovies } from "services/movies";

export const MoviesContext = createContext();
MoviesContext.displayName = "Movies";

export default function MoviesProvider({children}) {
    useEffect(() => {
        fetchMovies()
    }, [])
    
    const [movies, setMovies] = useState([]);
    
    async function fetchMovies() {
        const moviesJson = await getMovies()
        setMovies(moviesJson);
    }

    return(
        <MoviesContext.Provider value={{ movies, setMovies }} >
            {children}
        </MoviesContext.Provider>
    )
}


