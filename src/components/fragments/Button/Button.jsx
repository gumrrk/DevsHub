import { StyledButton, StyledShortButton, StyledSubmitButton } from "./style"

export const StyledLink = ({ children, backgroundcolor, hovercolor, to, type, disabled, boxshadow }) => {
    return (
        <StyledButton to={to} type={type} disabled={disabled} hovercolor={hovercolor} backgroundcolor={backgroundcolor} boxshadow={boxshadow}>{children}</StyledButton>
    )
}

export const StyledButtonSubmit = ({ children, backgroundcolor, to, hovercolor, type, disabled, cursor, boxshadow, width, onClick }) => {
    return (
        <StyledSubmitButton to={to} type={type} disabled={disabled} hovercolor={hovercolor} backgroundcolor={backgroundcolor} cursor={cursor} boxshadow={boxshadow} width={width} onClick={onClick}>{children}</StyledSubmitButton>
    )
}

export const StyledLinkShort = ({ children, to, type, onClick, hovercolor, boxshadow }) => {
    return (
        <StyledShortButton to={to} type={type} onClick={onClick} boxshadow={boxshadow} hovercolor={hovercolor}>{children}</StyledShortButton>
    )
}


