import styles from "./Input.module.css"

export function Input({type, text, name, placeholder, handleOnchange, value})
{
    return(
        <div className={styles.form_control}>
             <label htmlFor={name}>{text}</label>
             <input type={type} name={name} 
             placeholder={placeholder} id={name} 
             onChange={handleOnchange}value={value}>
               
             </input>
        </div>
    )
}