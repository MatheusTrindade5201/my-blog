import { NavLink } from "react-router-dom"
import { MenuLinkWrapper } from "./style"

const MenuLink = ({to, children}) => {
    return (
        <MenuLinkWrapper>
            <NavLink 
            to={to} 
            className={`link ${({isActive}) => isActive ? 'active' : ''}`}>
                {children}
            </NavLink>
        </MenuLinkWrapper>
    )
}

export default MenuLink