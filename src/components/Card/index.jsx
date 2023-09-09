import styles from "./Card.module.scss"
import plus from "./plus.jpg"

export default function Card() {
    return (

        <div className={styles.card}>
            <h5 className={styles.card__titulo}>Titulo do card</h5>
            <img className={styles.card__imagem} src={plus} alt="Imagem do Card" />
            <ul className={styles.card__lista}>
                <li>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet, autem magnam adipisci, facilis quaerat nisi harum cumque quibusdam deserunt dolorem eligendi accusamus!</p>
                </li>
                <li>Assistido</li>
                <li>Não curtido</li>
                <li>
                    <button>Modificar</button>
                    <button>Apagar</button>
                </li>
            </ul>
        </div>

    )
}
