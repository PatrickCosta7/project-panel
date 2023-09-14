import { useState } from "react";
import styles from "./Modal.module.scss";

export default function Modal({ modalOn, fecharModal }) {

    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const [curtido, setCurtido] = useState(true);
    
    //desabilitar o "Curtido?"
    const interagirComCurtido = (event) => {
        const selectCurtido = document.getElementById('curtido');
        const valorSelecionado = event.target.value;
        setOpcaoSelecionada(valorSelecionado);
        if (opcaoSelecionada === '1') {
            setCurtido(true);
            selectCurtido.style.color = "#353535";
        } else {
            setCurtido(false);
            selectCurtido.style.color = "#FFF";
        }
    }

    return modalOn ? ( 
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <header className={styles.modal__cabecalho}>
                    Preencha as informações abaixo
                </header>

                <ul className={styles.modal__corpo}>
                    <li className={styles.lista}>
                        <input type="text" placeholder="nome do filme" />
                    </li>

                    <li className={styles.lista}>
                        <textarea className={styles.descricao} placeholder="descrição" />

                    </li>

                    <li className={styles.lista}>
                        <label htmlFor="visto">Assistiu?</label>
                        <select value={opcaoSelecionada} onChange={interagirComCurtido} className={styles.selecao} name="visto" id="visto">
                            <option value="0">Não</option>
                            <option value="1">Sim</option>
                        </select>
                    </li>

                    <li className={styles.lista}>
                        <label htmlFor="curtido">Curtido?</label>
                        <select className={styles.selecao__D} name="curtido" id="curtido" disabled={curtido}>
                            <option value="0">---</option>
                            <option value="1">Sim</option>
                            <option value="2">Não</option>
                        </select>
                    </li>

                    <li className={styles.lista}>
                        <button onClick={fecharModal}>Fechar</button>
                        <button>Cadastrar</button>
                    </li>
                </ul>
            </div>
        </div>
    ) : null;
}