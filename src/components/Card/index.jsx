import styles from "./Card.module.scss"

export default function Card(props) {
    return (

        <div className={`${styles.col_xs_6} ${styles.col_md_3} ${styles.col_lg_2}`}>
            <div className={styles.card}>
                <h5 className={styles.card__titulo}>{props.titulo}</h5>
                <img className={styles.card__imagem} src={props.imagem} alt="Imagem do Card" />
                <ul className={styles.card__lista}>
                    <li>
                        <p>{props.descricao}</p>
                    </li>
                    <li>{props.visto}</li>
                    <li>{props.curtido}</li>
                    <li>
                        <button>Modificar</button>
                        <button>Apagar</button>
                    </li>
                </ul>
            </div>
        </div>

    )
}
