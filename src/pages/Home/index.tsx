import { Conteiners } from "../../componentes/Conteiner"
import { ContDown } from "../../componentes/ContDown";
import { MainForm } from "../../componentes/MainForm";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home(){
    return(
    <MainTemplate>
        <Conteiners>
            <ContDown />
        </Conteiners>

        <Conteiners>
            <MainForm />
        </Conteiners>
    </MainTemplate>
    
)}