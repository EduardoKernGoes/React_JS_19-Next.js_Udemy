import { Cabecalho } from './componentes/Cabecalho'
import { Conteiners } from './componentes/Conteiner'
import { Logo } from './componentes/Logo'

import './styles/global.css'
import './styles/tema.css'

export function App(){
    return <>

        <Conteiners>

            <Cabecalho>
                
                <Logo></Logo>

            </Cabecalho>

        </Conteiners>

        <Conteiners>

            <Cabecalho>

                <h1>Menu</h1>

            </Cabecalho>

        </Conteiners>

    </>
    
}

//export default App
//export {App}""