import { Page404Wrapper } from "./style"

import dogImage from '@/assets/images/erro_404.png'
import { useNavigate } from "react-router-dom"

const Page404 = () => {

    const navigate = useNavigate()

    return(
        <Page404Wrapper>
            <div className="info">
                <h1>404</h1>
                <h2>Ops! Página não encontrada.</h2>
                <p>Tem certeza de que era isso que você estava procurando?</p> 
                <p>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
                <div className="bottom-div">
                    <button onClick={() => navigate(-1)} className="button" to={'/'}>Voltar</button>
                    <img src={dogImage} />
                </div>

            </div>
            
        </Page404Wrapper>
    )
}

export default Page404