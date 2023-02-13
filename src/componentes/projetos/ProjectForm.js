import {useEffect, useState} from "react"

import styles from  "./ProjectForm.module.css"
import {Input} from "../form/Input.js"
import {Select} from "../form/Select.js"
import {Submit} from "../form/Submit.js"
export function ProjectForm({newText})
{
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {'Content-Type': 'application/json',},
    }).then((resp) => resp.json).then((data) => {
        setCategories(data)
    }).catch((err) => console.log(err))
    }, [])    
    return(
        <div>
            <form className={styles.form}>
                <div>
                    <Input type='text' name='nome' text='Digite o nome do projeto' placeholder='Digite o seu nome' value='' />                   
                </div>
                <div>
                    <Input type='number' name='numero' text='Digite a quantia' placeholder='Digite um numero' value=''/>
                </div>
                <div>
                    <Select text='Selecione' name='opçao' options={categories} />
                </div>
                <div>
                    <Submit text={newText}/> 
                </div>
               
            </form>
        </div>
    )

}
