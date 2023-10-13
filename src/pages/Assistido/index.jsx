import Card from "components/Card"
import styles from "./Assistido.module.scss"
import { useContext } from "react"
import { MoviesContext } from "context/movies"

export default function Assistidos() {

    const { movies } = useContext(MoviesContext);

    const filmesAssistidos = movies.filter(movie => movie.visto === "Assistido");

    function verificacao() {
        if (filmesAssistidos.length === 0) {
            return (
                <div className={styles.box}>
                    <h1>
                        Até agora não foi assistido nenhum filme.
                    </h1>
                </div>
            )
        } else {
            return (
                filmesAssistidos.map(movie => (
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
