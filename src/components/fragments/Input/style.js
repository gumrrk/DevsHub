import { styled } from "styled-components";

export const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
    width: 100%;
    border: none;

    .readOnly {
        cursor: default;
        border: none;
        outline: none;
    }
`

export const StyledLabel = styled.label`
    font-family: var(--font-primary);
    font-size: 10px;
    font-weight: 400;
    color: var(--color-grey-0);
`

export const StyledInput = styled.input`
    display: flex;
    width: 100%;
    height: 2.4063rem;
    color: var(--color-grey-0);
    background-color: var(--color-grey-2);
    font-family: var(--font-primary);
    padding: .6406rem .8125rem;
    border-radius: .25rem;
    border: none;
    font-size: 1.01rem;
    line-height: 1.6875rem;

    :focus {
    border: 1px solid var(--color-grey-0);
    }
`

export const StyledParagraph = styled.h4`
    font-family: var(--font-primary);
    color: var(--color-negative);
    line-height: 1.6;
    font-weight: 600;
    font-size: .75rem;
    margin-top: -.625rem;
`