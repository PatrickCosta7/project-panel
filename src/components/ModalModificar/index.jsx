import { patchMovie } from "services/movies"
import styles from "./ModalModificar.module.scss";

export default function ModalModificar(props) {

    async function ModificarMovie() {
        const id = props.id;
        const nome = document.getElementById('nomeFilme').value;
        const imagem = document.getElementById('linkImagem').value;
        const descricao = document.getElementById('descricao').value;
        const visto = document.getElementById('visto').value;
        const curtido = document.getElementById('curtido').value;
        const objeto = {
            nome: nome,
            imagem: imagem,
            descricao: descricao,
            visto: visto,
            curtido: curtido
        }

        await patchMovie(id, objeto);
        window.location.reload(true);
        alert("Filme Modificado com sucesso")

    }

    return props.modalModificarOn ? (

            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <header className={styles.modal__cabecalho}>
                        Preencha as informações abaixo
                    </header>

                    <ul className={styles.modal__corpo}>
                        <li className={styles.lista}>
                            <input type="text" placeholder="nome do filme" id="nomeFilme" defaultValue={props.titulo} />
                        </li>

                        <li className={styles.lista}>
                            <input type="text" placeholder="Link da imagem" id="linkImagem" defaultValue={props.imagem} />
                        </li>

                        <li className={styles.lista}>
                            <textarea className={styles.descricao} placeholder="descrição" id="descricao" defaultValue={props.descricao} />
                        </li>

                        <li className={styles.lista}>
                            <label htmlFor="visto">Assistiu?</label>
                            <select defaultValue={props.visto} className={styles.selecao} name="visto" id="visto">
                                <option value="Nao assistido">Não</option>
                                <option value="Assistido">Sim</option>
                            </select>
                        </li>

                        <li className={styles.lista}>
                            <label htmlFor="curtido">Curtido?</label>
                            <select defaultValue={props.curtido} className={styles.selecao} name="curtido" id="curtido">
                                <option value="--">---</option>
                                <option value="Curtido">Sim</option>
                                <option value="Nao curtido">Não</option>
                            </select>
                        </li>

                        <li className={styles.lista}>
                            <button onClick={props.fecharModalModificar}>Fechar</button>
                            <button onClick={ModificarMovie}>Modificar</button>
                        </li>
                    </ul>
                </div>
            </div>
    ) : null;
}