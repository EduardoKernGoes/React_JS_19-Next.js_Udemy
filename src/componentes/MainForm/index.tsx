import { PlayCircleIcon } from "lucide-react";
import { Ciclos } from "../Ciclos";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm(){
    return (
    <form className='form' action="">
        <div className="formRow">
            <DefaultInput
                labelText='task'
                id='input'
                type='text'
                placeholder='Digite Algo'/>
        </div>

        <div className="formRow">
            <p>Próximo intervalo é de 25 minutos</p>
        </div>

        <div className="formRow">
            <Ciclos />
        </div>

        <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />}/>
        </div>
    </form>

)}