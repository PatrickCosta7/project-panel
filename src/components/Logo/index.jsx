import styles from "./Logo.module.scss"
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/" className={styles.logo}>
            <div>
                <h1>Project B Panel</h1>
            </div>
        </Link>
    )
}