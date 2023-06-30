import { styled } from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    padding: .75rem;

    img {
        align-self: center;
        width: 6.25rem;
    }
`

export const StyledDivHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 23.125rem;
    margin-top: 3.5625rem;
    margin-bottom: 2.4375rem;

img {
    width: 6.125rem;
}
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
    gap: 18px;
    max-width: 23.125rem;

    h1 {
        align-self: center;
        font-family: var(--font-primary);
        font-size: 14px;
        font-weight: 700;
        color: var(--color-grey-0);
    }

    p {
        font-family: var(--font-primary);
        font-style: normal;
        font-weight: 600;
        font-size: 9.62602px;
        color: var(--color-grey-1);
    }
`

export const ScrollableContent = styled.div`
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    height: 100vh;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }
`;