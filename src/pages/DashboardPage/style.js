import { styled } from "styled-components";

export const StyledContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const StyledWelcomePage = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--color-grey-2);
    border-bottom: 1px solid var(--color-grey-2);
    align-items: center;
    
        .userContainer {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: .625rem;
            padding: 2.2188rem .75rem;
            width: 100%;
            max-width: 48.4375rem;

            h1 {
                font-family: var(--font-primary);
                font-weight: 700;
                font-size: 18px;
                line-height: 28px;
                color: var(--color-grey-0);
            }

            p {
                font-family: var(--font-primary);
                font-weight: 400;
                font-size: 12px;
                line-height: 22px;
                color: var(--color-grey-1);
            }
        }
    `

export const StyledDashboardPage = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
        
        .development {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 48.4375rem; 
            padding: 19px .75rem 1.3125rem .75rem;
        }
 `

export const UlHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 48.4375rem;
    padding: 0rem 0rem 1.3125rem 0rem;

    h3 {
        font-family: var(--font-primary);
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: var(--color-grey-0);
    }

    button {
        padding: 11px;
        color: var(--color-grey-0);
        background-color: var(--color-grey-3);
        line-height: 0px;
        border-radius: .25rem;
    }

    button:hover{
        background-color: var(--color-grey-2);
    }
`

export const UlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 100%;
    max-width: 48.4375rem;
    padding: 1.375rem .5313rem 1.4375rem .5313rem;
    background-color: var(--color-grey-3);
    gap: 1rem;
    border-radius: .25rem;

    .noTechs {
        font-family: var(--font-primary);
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        color: var(--color-grey-0);
    }
`

export const LiStyled = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12.8px;
    background-color: var(--color-grey-4);
    border-radius: .25rem;
    cursor: pointer;

    &:hover{
        background-color: var(--color-grey-2);
    }

    &:hover p {
        color: var(--color-grey-0);
    }

    h2 {
        font-family: var(--font-primary);
        font-weight: 700;
        color: var(--color-grey-0);
        font-size: .875rem;
    }

    p {
        font-family: var(--font-primary);
        font-weight: 400;
        color: var(--color-grey-1);
        font-size: .75rem;
    }
`

export const AddTechModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .divModalHeader {
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: var(--color-grey-2);
        justify-content: space-between;
        padding: .9375rem 1.25rem;

        h1 {
            font-family: var(--font-primary);
            font-weight: 700;
            color: var(--color-grey-0);
            font-size: .75rem;
        }

        button{
            background-color: transparent;
            padding: 0;
            color: var(--color-grey-1);
        }
    }

    .divModalMain {
        display: flex;
        flex-direction: column;
        padding: .9375rem 1.25rem;
        gap: 1.25rem;
    }
`

export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const StyledDivButtons = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    .firstbutton_grid {
        width: 60%;
    }

    .secondbutton_grid {
        width: 30%;
    }
`
