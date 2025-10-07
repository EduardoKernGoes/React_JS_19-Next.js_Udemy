import { ContDown } from './componentes/ContDown'
import { Conteiners } from './componentes/Conteiner'
import { Logo } from './componentes/Logo'
import { Menu } from './componentes/Menu'
import { DefaultInput } from './componentes/DefaultInput'

import './styles/global.css'
import './styles/tema.css'

export function App(){
    return <>

        <Conteiners>
                
            <Logo />

        </Conteiners>

        <Conteiners>

            <Menu />

        </Conteiners>

        <Conteiners>

            <ContDown />

        </Conteiners>

        <Conteiners>

            <form className='form' action="">

                <div className="formRow">

                    <DefaultInput
                        labelText='task'
                        id='input'
                        type='text'
                        placeholder='Digite Algo'/>

                </div>

                <div className="formRow">

                    <p>Lorem ipsum dolor sit amet.</p>

                </div>

                <div className="formRow">

                    <p>ciclos</p>
                    <p>0 0 0 0 0 0 0</p>

                </div>

                <div className="formRow">

                    <button>Enviar</button>

                </div>

            </form>

        </Conteiners>

    </>
    
}

//export default App
//export {App}""