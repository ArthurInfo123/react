import {Link } from "react-router-dom"
import { Container } from "../Layouts/Container"
import styles from "./NavBar.module.css"

export function NavBar()
{
    return(
        <nav className={styles.NavBar}>
            <Container customClass='min-height'>  
            <ul className={styles.list}>
                <li className={styles.item}><Link to='/Contato'>Contato</Link> </li>  
                <li className={styles.item}><Link to='/Company'>Company</Link></li> 
                <li className={styles.item}><Link to='/'> Home </Link></li> 
                <li className={styles.item}><Link to='/NewProject'>NewProject</Link></li>
                <li className={styles.item}><Link to='/Projects'>Projects</Link></li>
            </ul>          
                
            </Container>
        </nav>
            
    )
}