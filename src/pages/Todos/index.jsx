import Card from "components/Card"
import styles from "./Todos.module.scss"

export default function Todos() {
    return (
        <>
            <section className={styles.row}>

                <Card
                    titulo="Your name"
                    imagem="https://br.web.img3.acsta.net/pictures/17/10/04/19/01/4966397.jpg"
                    descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet, autem magnam adipisci, facilis quaerat nisi harum cumque quibusdam deserunt dolorem eligendi accusamus!"
                    visto="Assistido"
                    curtido="Curtido"
                />
                
            </section>

        </>
    )
}
