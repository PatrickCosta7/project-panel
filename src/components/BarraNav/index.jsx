import BarraLink from "components/BarraLink";
import Logo from "components/Logo";
import Modal from "components/Modal";
import { useState } from "react";
import styles from "./BarraNav.module.scss"

function BarraNav() {
    const [modalOn, setModalOn] = useState(false);
    
    const abrirModal = () => {
        setModalOn(true);
    }

    const fecharModal = () => {
        setModalOn(false);
    }

    return (

        <nav className={styles.barra}>
            <Logo />
            <ul className={styles.barra__lista}>
                <li>
                    <BarraLink url="">
                        Assistidos
                    </BarraLink>
                </li>
                <li>
                    <BarraLink url="">
                        Não assistidos
                    </BarraLink>
                </li>
                <li>
                    <BarraLink url="">
                        Gostei
                    </BarraLink>
                </li>
                <li>
                    <BarraLink url="">
                        Não Gostei
                    </BarraLink>
                </li>
                <li>
                    <h5 className={styles.botao} onClick={abrirModal}>
                        Adicionar Filme
                    </h5>
                </li>
            </ul>
            <Modal modalOn={modalOn} fecharModal={fecharModal}/>
        </nav>


    )
}


export default BarraNav;