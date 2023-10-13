import Card from "components/Card"
import styles from "./Curtidos.module.scss"
import { useContext } from "react"
import { MoviesContext } from "context/movies"

export default function Curtidos() {

    const { movies } = useContext(MoviesContext);

    const filmesCurtidos = movies.filter(movie => movie.curtido === "Curtido");

    function verificacao() {
        if (filmesCurtidos.length === 0) {
            return (
                <div className={styles.box}>
                    <h1>
                        Até agora nenhum filme foi curtido.
                    </h1>
                </div>
            )
        } else {
            return (
                filmesCurtidos.map(movie => (
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
