import Card from "components/Card"
import styles from "./Todos.module.scss"
import { useContext } from "react"
import { MoviesContext } from "context/movies"

export default function Todos() {

    const { movies } = useContext(MoviesContext);

    function verificacao() {
        if (movies.length === 0) {
            return (
                <div className={styles.box}>
                    <h1>
                        Até agora você não tem nenhum filme em sua lista 
                    </h1>
                </div>
            )
        } else {
            return (
                movies.map(movie => (
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
            )))
        }
    }

    return (
        <>
            <section className={styles.row}>
                {verificacao()}
            </section>

        </>
    )
}
