import { LinkButton } from "../../Layouts/LinkButton"
import styles from "./home.module.css"

export function Home()
{
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs </span></h1>
            <p>Começe a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/NewProject' text='Criar projeto' />
        </section>
        

       
    )
}
 