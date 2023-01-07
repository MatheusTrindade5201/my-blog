import styled from "styled-components";

export const Page404Wrapper = styled.div`
    height: calc(100vh - 233px);
    color: #ffffff;

    h1{
       color: #1875E8
    }

    .info{
        padding-top: 2rem;
        height: 50%;
        background-color: #041833;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem
    }

    .bottom-div{
        display: flex;
        justify-content: center;
        gap: 8rem
    }

    .bottom-div .button{
        align-self: flex-start;
        padding: 24px 56px;
        border-radius: 24px;
        border: none;
        background-color: #1875E8;
        color: #ffffff;
        font-size: 1rem;
        margin-top: 2rem;
        text-decoration: none
    }

    .button:hover{
        cursor: pointer;
    }
`