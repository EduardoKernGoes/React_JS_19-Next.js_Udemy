import { ContDown } from './componentes/ContDown'
import { Conteiners } from './componentes/Conteiner'
import { Logo } from './componentes/Logo'
import { Menu } from './componentes/Menu'
import { DefaultInput } from './componentes/DefaultInput'
import { DefaultButton } from './componentes/DefaultButton'


import './styles/global.css'
import './styles/tema.css'
import { Ciclos } from './componentes/Ciclos'
import { PlayCircleIcon } from 'lucide-react'
import { Rodape } from './componentes/Rodape'

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
                    <Ciclos />
                </div>

                <div className="formRow">
                    <DefaultButton icon={<PlayCircleIcon />}/>
                </div>
            </form>
        </Conteiners>

        <Conteiners>
            <Rodape />
        </Conteiners>

    </>
    
}

//export default App
//export {App}""