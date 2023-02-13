import styles from "./Container.module.css"
export function Container(props)
{
   return(
            <div className={`${styles.Container} ${styles[props.customClass]}`}>
                {props.children}
            </div>
   )
}