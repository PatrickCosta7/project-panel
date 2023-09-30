import { useEffect, useState } from "react";
import { getMovies, postMovie } from "services/movies"
import styles from "./ModalModificar.module.scss";

export default function ModalModificar({ modalOn, fecharModal }) {

    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const [curtido, setCurtido] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies()
    }, [])

    async function fetchMovies() {
        const moviesJson = await getMovies()
        setMovies(moviesJson);
    }

    //desabilitar o "Curtido?"
    const interagirComCurtido = (event) => {
        const selectCurtido = document.getElementById('curtido');
        const valorSelecionado = event.target.value;
        setOpcaoSelecionada(valorSelecionado);
        if (opcaoSelecionada === 'Assistido') {
            setCurtido(true);
            selectCurtido.style.color = "#353535";
            selectCurtido.selectedIndex = "0";
        } else {
            setCurtido(false);
            selectCurtido.style.color = "#4E9F3D";
        }
    }

    async function ModificarMovie() {
        const nome = document.getElementById('nomeFilme').value;
        const imagem = document.getElementById('linkImagem').value;
        const descricao = document.getElementById('descricao').value;
        const visto = document.getElementById('visto').value;
        const curtido = document.getElementById('curtido').value;
        // const id = props.id;
        const objeto = {
            id: id,
            nome: nome,
            imagem: imagem,
            descricao: descricao,
            visto: visto,
            curtido: curtido
        }

        await patchMovie(objeto);
        window.location.reload(true);
        alert("Filme Modificado com sucesso")

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
                            <option value="Nao assistido">Não</option>
                            <option value="Assistido">Sim</option>
                        </select>
                    </li>

                    <li className={styles.lista}>
                        <label htmlFor="curtido">Curtido?</label>
                        <select className={styles.selecao__D} name="curtido" id="curtido" disabled={curtido}>
                            <option value="0">---</option>
                            <option value="Curtido">Sim</option>
                            <option value="Nao curtido">Não</option>
                        </select>
                    </li>

                    <li className={styles.lista}>
                        <button onClick={fecharModal}>Fechar</button>
                        <button onClick={ModificarMovie}>Cadastrar</button>
                    </li>
                </ul>
            </div>
        </div>
    ) : null;
}