import BarraLink from "components/BarraLink";
import Logo from "components/Logo";
import styles from "./BarraNav.module.scss"

function BarraNav() {
    return (

        <header className={styles.barra}>
            <Logo />
            <ul className={styles.barra__lista}>
                <li>
                    <BarraLink url="/">
                        Todos
                    </BarraLink>
                </li>
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
                
            </ul>
        </header>


    )
}


export default BarraNav;