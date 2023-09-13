import styles from "./BarraLink.module.scss"
import { Link } from "react-router-dom";

export default function BarraLink({ url, children, color }) {
    
    // const classeScss = `${styles.link} ${styles[color]}`;
    
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}