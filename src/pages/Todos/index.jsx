import Card from "components/Card"
import styles from "./Todos.module.scss"
import { getMovies } from "services/movies"
import { useEffect, useState } from "react";

export default function Todos() {

    useEffect(() => {
        fetchMovies()
    }, [])

    const [movies, setMovies] = useState([]);

    async function fetchMovies() {
        const moviesJson = await getMovies()
        setMovies(moviesJson);
    }

    return (
        <>
            <section className={styles.row}>
                {movies.map(movie => (
                    <>
                        <Card
                            id={movie.id}
                            titulo={movie.nome}
                            imagem={movie.imagem}
                            descricao={movie.descricao}
                            visto={movie.visto}
                            curtido={movie.curtido} 
                        />
                        
                    </>
                ))}
            </section>

        </>
    )
}
