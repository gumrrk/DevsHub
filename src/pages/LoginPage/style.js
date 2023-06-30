import { styled } from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 100vh;
    padding: .75rem;

    img {
        align-self: center;
        width: 6.25rem;
    }
`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2125rem;
    width: 100%;
    max-width: 23.125rem;
    justify-content: center;
`

export const StyledForm = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-grey-3);
    border-radius: .5rem;
    padding: 34px .8562rem 2.1063rem .8562rem;
    gap: 12px;

    h1 {
        align-self: center;
        font-family: var(--font-primary);
        font-size: 14px;
        font-weight: 700;
        color: var(--color-grey-0);
    }

    span {
        font-family: var(--font-primary);
        font-style: normal;
        font-weight: 600;
        font-size: 9.62602px;
        color: var(--color-grey-1);
        margin-top: .75rem;
        margin-bottom: .3125rem;
    }
`