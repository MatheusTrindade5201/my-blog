import styled from "styled-components";

export const MenuLinkWrapper = styled.li`
    list-style: none;

    .link{
        color: black;
        text-decoration: none;
        font-size: 20px;
        transition: .2s
    }

    .active{
        text-decoration: underline;
    }

    .link:hover{
        text-decoration: underline;
    }
    
    
`