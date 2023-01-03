import { BannerWrapper } from "./style"

import circuloColorido from '@/assets/images/circulo_colorido.png'

const Banner = () => {
    return (
        <BannerWrapper>
            <div className="banner__section-text">
                <h1 className="banner__title">Ola, Mundo!</h1>
                <p className="banner__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non consectetur quam corporis, commodi quaerat nihil quas ab quod quae eligendi maiores, nisi ex quasi excepturi libero eaque harum odio.</p>
            </div>
            <div className="banner__section-images">
                <img src={circuloColorido} />
            </div>
        </BannerWrapper>
    )
}

export default Banner