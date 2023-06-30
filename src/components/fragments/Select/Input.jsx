import { StyledParagraph } from "../Input/style" 
import { StyledDiv, StyledSelect, StyledLabel } from "./style" 
import { forwardRef } from "react" 

export const Select = forwardRef(({ label, error, ...rest }, ref) => {
   return (
      <StyledDiv>
         <StyledLabel>{label}</StyledLabel>
         <StyledSelect ref={ref} {...rest} />
         {error ? (
            <StyledParagraph>{error.message}</StyledParagraph>
         ) : null}
      </StyledDiv>
   ) 
}) 