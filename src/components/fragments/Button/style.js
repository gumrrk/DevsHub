import { styled } from "styled-components";
import { Link } from "react-router-dom"

export const StyledButton = styled(Link)`
    width: 100%;
    height: 2.4063rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-primary);
    font-weight: 500;
    color: var(--color-grey-0);
    font-size: .8125rem;
    background-color: ${({ backgroundcolor }) => backgroundcolor ? backgroundcolor : "var(--color-grey-2)"};
    border-radius: .25rem;
    flex-direction: column;
    gap: 1.125rem;

    &:hover{
        background-color: ${({ hovercolor }) => hovercolor ? hovercolor : "none"};
        box-shadow: ${({ boxshadow }) => boxshadow ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none"}
    }
`;

export const StyledSubmitButton = styled.button`
    width: ${({ width }) => width ? width : "100%"};
    height: 2.4063rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-primary);
    font-weight: 500;
    color: var(--color-grey-0);
    font-size: .8125rem;
    background-color: ${({ backgroundcolor }) => backgroundcolor ? backgroundcolor : "var(--color-grey-2)"};
    border-radius: .25rem;
    flex-direction: column;
    gap: 1.125rem;
    cursor: ${({ cursor }) => cursor ? cursor : "pointer"};

    &:hover{
        background-color: ${({ hovercolor }) => hovercolor ? hovercolor : "none"};
        box-shadow: ${({ boxshadow }) => boxshadow ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none"}
    }
`;

export const StyledShortButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .6rem;
    width: 4.97rem;
    height: 2rem;
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    border-radius: .25rem;
    font-family: var(--font-primary);
    font-weight: 600;

    &:hover {
        background-color: var(--color-grey-2);
        box-shadow: ${({ boxshadow }) => boxshadow ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none"}
    }
`;