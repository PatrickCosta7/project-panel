import Card from "components/Card"
import styles from "./NaoCurtidos.module.scss"
import { useContext } from "react"
import { MoviesContext } from "context/movies"

export default function NaoCurtidos() {

    const { movies } = useContext(MoviesContext);

    const filmesNaoCurtidos = movies.filter(movie => movie.curtido === "Não curtido");

    function verificacao() {
        if (filmesNaoCurtidos.length === 0) {
            return (
                <div className={styles.box}>
                    <h1>
                        Até agora nenhum filme está na lista de "Não gostei"
                    </h1>
                </div>
            )
        } else {
            return (
                filmesNaoCurtidos.map(movie => (
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
