import { NavLink } from "react-router-dom"
import MenuLink from "./MenuLink"
import { HeaderWrapper } from "./style"

const HeaderBar = () => {
    return(
        <HeaderWrapper>
            <ul>
                <MenuLink to={'/'} children={'Home'} />
                <MenuLink to={'/aboutMe'} children={'About Me'} />
            </ul>
        </HeaderWrapper>
    )
}

export default HeaderBar