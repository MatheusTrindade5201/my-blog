import styled from "styled-components";

export const PostBodyWrapper = styled.article`
    margin-top: 2.5rem;

    .about__me-banner, .title{
        height: 204px
    }

    .title{
        padding: 0 7.5rem;
        font-size: 4rem;
        display: flex;
        align-items: center;
    }

    .about__me-banner{
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.3;
        top: 0;
    }

    .content{
         padding: 2.5rem 7.5rem 4.5rem;
    }

    .biography__photo {
        margin-bottom: .5rem;
        margin-left: 1.5rem;
        width: 40vw;
        float: right;
    }

    .subtitle{
        margin-bottom: 2rem;
        font-size: 2.5rem;
    }

    p {
        text-align: justify;
        font-size: 1.5rem;
        line-height: 2.25rem;
        margin-bottom: 1.5rem;
    }
`