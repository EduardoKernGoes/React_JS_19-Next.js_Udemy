import { useContext } from "react";
import { TaskContexto } from "./taskContext";

export function useTaskContext(){
    return(useContext(TaskContexto))
}