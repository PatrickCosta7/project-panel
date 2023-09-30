import Card from "components/Card"
import styles from "./Todos.module.scss"
import { getMovies } from "services/movies"
import { useEffect, useState } from "react";
import ModalModificar from "components/ModalModificar";

export default function Todos() {

    const [modalModificarOn, setModalModificarOn] = useState(false);

    const abrirmodalModificar = () => {
        setModalModificarOn(true);
    }

    const fecharmodalModificar = () => {
        setModalModificarOn(false);
    }

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
                { movies.map( movie => (
                    <Card
                        id={movie.id}
                        titulo={movie.nome}
                        imagem={movie.imagem}
                        descricao={movie.descricao}
                        visto={movie.visto}
                        curtido={movie.curtido}
                    />
                ))}
            </section>

            <ModalModificar modalModificarOn={modalModificarOn} abrirModalModificar={abrirmodalModificar} fecharModalModificar={fecharmodalModificar}/>
        </>
    )
}
