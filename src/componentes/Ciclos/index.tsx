import styles from './styles.module.css'

export function Ciclos(){
    return(
        <div className={styles.ciclos}>

            <span>Ciclos:</span>

            <div className={styles.ciclosDots}>

                <span className={`${styles.ciclosDot} ${styles.tempoTrabalho}`}></span>
                <span className={`${styles.ciclosDot} ${styles.tempoDescansoCurto}`}></span>
                <span className={`${styles.ciclosDot} ${styles.tempoTrabalho}`}></span>
                <span className={`${styles.ciclosDot} ${styles.tempoDescansoCurto}`}></span>
                <span className={`${styles.ciclosDot} ${styles.tempoTrabalho}`}></span>
                <span className={`${styles.ciclosDot} ${styles.tempoDescansoCurto}`}></span>
                <span className={`${styles.ciclosDot} ${styles.tempoTrabalho}`}></span>
                <span className={`${styles.ciclosDot} ${styles.tempoDescansoLongo}`}></span>


            </div>

        </div>
    )
}