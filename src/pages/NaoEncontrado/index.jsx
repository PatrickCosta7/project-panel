import styles from './NaoEncontrado.module.scss';

export default function NaoEncontrado() {
    return (
        <section className={styles.row}>
            <div className={styles.box}>
                <h1>
                    Essa página não existe!
                </h1>
            </div>
        </section>
    )
}