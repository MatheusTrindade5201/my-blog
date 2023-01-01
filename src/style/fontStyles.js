import { createGlobalStyle } from "styled-components";
import Raleway from '@/assets/fonts/Raleway-Regular.ttf'   

const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Raleway';
        src: url(${Raleway}) format('truetype');
    }
`

export default FontStyle