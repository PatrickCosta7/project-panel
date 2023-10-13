import { useContext, useState } from "react";
import { postMovie } from "services/movies"
import styles from "./Modal.module.scss";
import { MoviesContext } from "context/movies";

export default function Modal({ modalOn, fecharModal }) {

    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const [curtido, setCurtido] = useState(true);
    const { movies } = useContext(MoviesContext)

    //desabilitar o "Curtido?"
    const interagirComCurtido = (event) => {
        const selectCurtido = document.getElementById('curtido');
        const valorSelecionado = event.target.value;
        setOpcaoSelecionada(valorSelecionado);
        if (opcaoSelecionada === 'Assistido') {
            setCurtido(true);
            selectCurtido.style.color = "#353535";
            selectCurtido.selectedIndex = "--";
        } else {
            setCurtido(false);
            selectCurtido.style.color = "#4E9F3D";
        }
    }

    async function cadastrarMovie() {
        const nome = document.getElementById('nomeFilme').value;
        const imagem = document.getElementById('linkImagem').value;
        const descricao = document.getElementById('descricao').value;
        const visto = document.getElementById('visto').value;
        const curtido = document.getElementById('curtido').value;
        const id = movies.length + 1;
        const objeto = {
            id: id,
            nome: nome,
            imagem: imagem,
            descricao: descricao,
            visto: visto,
            curtido: curtido
        }

        await postMovie(objeto);
        window.location.reload(true);
        alert("Filme cadastrado com sucesso")

    }

    return modalOn ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <header className={styles.modal__cabecalho}>
                    Preencha as informações abaixo
                </header>

                <ul className={styles.modal__corpo}>
                    <li className={styles.lista}>
                        <input type="text" placeholder="nome do filme" id="nomeFilme" />
                    </li>

                    <li className={styles.lista}>
                        <input type="text" placeholder="Link da imagem" id="linkImagem" />
                    </li>

                    <li className={styles.lista}>
                        <textarea className={styles.descricao} placeholder="descrição" id="descricao" />

                    </li>

                    <li className={styles.lista}>
                        <label htmlFor="visto">Assistiu?</label>
                        <select value={opcaoSelecionada} onChange={interagirComCurtido} className={styles.selecao} name="visto" id="visto">
                            <option value="Não assistido">Não</option>
                            <option value="Assistido">Sim</option>
                        </select>
                    </li>

                    <li className={styles.lista}>
                        <label htmlFor="curtido">Curtido?</label>
                        <select className={styles.selecao__D} name="curtido" id="curtido" disabled={curtido}>
                            <option value="--">---</option>
                            <option value="Curtido">Sim</option>
                            <option value="Não curtido">Não</option>
                        </select>
                    </li>

                    <li className={styles.lista}>
                        <button onClick={fecharModal}>Fechar</button>
                        <button onClick={cadastrarMovie}>Cadastrar</button>
                    </li>
                </ul>
            </div>
        </div>
    ) : null;
}