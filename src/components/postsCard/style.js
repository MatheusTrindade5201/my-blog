import styled from "styled-components";

export const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:24px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding-bottom: 24px;

    .post__image{
        width: 282px
    }

    p{
        color: #041833;
        font-weight: 600;
        text-decoration: unset
    }

    button{
        border: none;
        background-color: #1875E8;
        border-radius: 24px;
        color: #ffffff;
        padding: 10px 25px;
    }
`