import { styled } from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    width: 100%;
`

export const StyledLabel = styled.label`
    font-family: var(--font-primary);
    font-size: 10px;
    font-weight: 400;
    color: var(--color-grey-0);
`

export const StyledSelect = styled.select`
    display: flex;
    width: 100%;
    height: 2.4063rem;
    font-family: var(--font-primary);
    color: var(--color-grey-0);
    background-color: var(--color-grey-2);
    padding-left: .8125rem;
    border-radius: .25rem;

    :focus {
    border: 1px solid var(--color-grey-0);
    }

    option {
        color: var(--color-grey-0);
        font-family: var(--font-primary);
    }
`

