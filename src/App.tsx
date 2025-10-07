import { Cabecalho } from './componentes/Cabecalho'
import { Conteiners } from './componentes/Conteiner'
import { Logo } from './componentes/Logo'
import { Menu } from './componentes/Menu'

import './styles/global.css'
import './styles/tema.css'

export function App(){
    return <>

        <Conteiners>

            <Cabecalho>
                
                <Logo />

            </Cabecalho>

        </Conteiners>

        <Conteiners>

            <Cabecalho>

                <Menu />

            </Cabecalho>

        </Conteiners>

    </>
    
}

//export default App
//export {App}""