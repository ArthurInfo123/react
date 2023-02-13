import { ProjectForm } from "../projetos/ProjectForm"
import styles from "./NewProject.module.css"

export function NewProject()
{
    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços </p>
            <ProjectForm newText='Enviar Projeto'/>
        </div>
    )
}
 