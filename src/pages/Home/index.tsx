import { Containers } from "../../components/Container"
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home(){

    return(
    <MainTemplate>
        <Containers>
            <CountDown />
        </Containers>

        <Containers>
            <MainForm />
        </Containers>
    </MainTemplate>
    
)}