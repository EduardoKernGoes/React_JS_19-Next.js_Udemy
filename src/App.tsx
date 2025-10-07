import { Cabecalho } from './componentes/Cabecalho'
import { Conteiners } from './componentes/Conteiners'
import './styles/global.css'
import './styles/tema.css'

export function App(){
    return <>

        <Conteiners>

            <Cabecalho>
                
                <h1>Logo</h1>

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