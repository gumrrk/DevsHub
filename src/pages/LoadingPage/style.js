import { styled } from "styled-components";

export const LoadingStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--color-grey-4);

    img {
        width: 20%;
        max-width: 6.25rem;
        height: auto;
    }
`