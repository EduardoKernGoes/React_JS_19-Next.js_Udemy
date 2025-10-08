import { createContext } from "react"
import type { TaskStateModel } from "../../modelos/TaskStateModel"
import { initialTaskState } from "./initialTaskState"

type TaskContextoProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const initialContextoValue ={
    state: initialTaskState,
    setState: () => {},
}


export const TaskContexto = createContext<TaskContextoProps>(initialContextoValue)