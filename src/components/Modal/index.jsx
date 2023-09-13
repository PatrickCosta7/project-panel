import styles from "./Modal.module.scss";

export default function Modal() {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <header className={styles.modal__cabecalho}>
                    Preencha as informações abaixo
                </header>

                <ul className={styles.modal__corpo}>
                    <li>
                        <input placeholder="nome do filme" />

                    </li>

                    <li>
                        <input placeholder="descrição" />
                    </li>

                    <li>
                        <input placeholder="assistido?" />
                    </li>

                    <li>
                        <input placeholder="não assistido?" />
                    </li>

                    <li>
                        <button>Fechar</button>
                        <button>Cadastrar</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}