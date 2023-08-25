import styles from "./BarraLink.module.scss"
import { Link } from "react-router-dom";

export default function BarraLink({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )

}