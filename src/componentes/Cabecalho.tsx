import styels from './Cabecalho.module.css'

export function Cabecalho(){
    return <h1 className={`${styels.cabecalho} ${styels.cyan}`}>Olá Mundo</h1>
}