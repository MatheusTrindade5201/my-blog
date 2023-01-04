import { FooterWrapper } from "./style"

import { ReactComponent as Brand } from "@/assets/images/marca_registrada.svg"

const FooterBar = () => {
    return (
        <FooterWrapper>
            <Brand />
            <p>Desenvolvido por Alura</p>
        </FooterWrapper>
    )
}

export default FooterBar