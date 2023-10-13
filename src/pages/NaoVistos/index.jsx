import Card from "components/Card"
import styles from "./NaoVistos.module.scss"
import { useContext } from "react"
import { MoviesContext } from "context/movies"

export default function NaoVistos() {

    const { movies } = useContext(MoviesContext);

    const filmesNaoVistos = movies.filter(movie => movie.visto === "Não assistido");

    function verificacao() {
        if (filmesNaoVistos.length === 0) {
            return (
                <div className={styles.box}>
                    <h1>
                        Você não tem nenhum filme na lista de "Não Assistidos"
                    </h1>
                </div>
            )
        } else {
            return (
                filmesNaoVistos.map(movie => (
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
