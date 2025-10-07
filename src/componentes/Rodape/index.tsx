import styels from './styles.module.css'

export function Rodape() {
    return <footer className={styels.footer}>

        <a href=''>Entenda como funciona a técnica pomodoro</a>
        <a href=''>Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
        
    </footer>
}