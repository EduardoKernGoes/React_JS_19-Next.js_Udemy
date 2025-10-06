import './styles/global.css'
import './styles/tema.css'

import { Cabecalho } from './componentes/Cabecalho'
import { TimerIcon } from 'lucide-react'

export function App(){
    return (
        <>
            <Cabecalho>
                Olá Mundo<button><TimerIcon /></button>
            </Cabecalho>
            <p>
                Exemplo de paragrafo
            </p>
        </>
    )
}

//export default App
//export {App}""