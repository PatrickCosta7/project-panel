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
                        <label htmlFor="visto">Assistiu?</label>
                        <select name="visto" id="visto">
                            <option value="Assistido">Sim</option>
                            <option value="Não assistido">Não</option>
                        </select>
                    </li>

                    <li>
                        <label htmlFor="curtido">Gostou?</label>
                        <select name="curtido" id="curtido" disabled>
                            <option value="Curtido">Sim</option>
                            <option value="Não Curtido">Não</option>
                        </select>
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