import { Conteiners } from "../../componentes/Conteiner";
import { Logo } from "../../componentes/Logo";
import { Menu } from "../../componentes/Menu";
import { Rodape } from "../../componentes/Rodape";

type MainTemplateProps = {
    children: React.ReactNode
}

export function MainTemplate({children}: MainTemplateProps){
    return(
    <>

        <Conteiners>
            <Logo />
        </Conteiners>

        <Conteiners>
            <Menu />
        </Conteiners>

        {children}

        <Conteiners>
            <Rodape />
        </Conteiners>

    </>
    
)}