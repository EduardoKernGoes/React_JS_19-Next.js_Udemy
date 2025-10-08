import { useState } from "react"
import { initialTaskState } from "./initialTaskState"
import { TaskContexto } from "./taskContext"

type TaskContextoProviderProps = {
    children: React.ReactNode
}

export function TaskContextoProvider({children}: TaskContextoProviderProps) {
    const [state, setState] = useState(initialTaskState)

    return(
        <TaskContexto.Provider value = {{state, setState}}>{children}</TaskContexto.Provider>
    )
}