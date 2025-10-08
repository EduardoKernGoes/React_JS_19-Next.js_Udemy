import { useTaskContext } from '../../contextos/TaskContexto/useTaskContext'
import styles from './styles.module.css'

export function ContDown() {
    const {state} = useTaskContext()

    return <div className={styles.container} >
        {state.formattedSecondsRemaining}
    </div>
}