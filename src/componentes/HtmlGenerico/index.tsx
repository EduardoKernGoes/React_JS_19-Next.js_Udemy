import styles from './styles.module.css'

type HtmlGenericoProps = {
    children: React.ReactNode
}

export function HtmlGenerico({children}: HtmlGenericoProps){
return(
    <div className={styles.HtmlGenerico}>{children}</div>
)}