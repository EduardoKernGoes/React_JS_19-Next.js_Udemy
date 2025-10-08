import './styles/global.css'
import './styles/tema.css'
import { Home } from './pages/Home'
import { TaskContextoProvider } from './contextos/TaskContexto/taskContextProvider'

export function App(){
    return(
        <TaskContextoProvider>
            <Home/>
        </TaskContextoProvider>
    )
}