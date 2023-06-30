import { StyledFieldset, StyledInput, StyledLabel, StyledParagraph } from "./style" 
import { forwardRef } from "react" 

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
   return (
      <StyledFieldset>
         <StyledLabel>{label}</StyledLabel>
         <StyledInput ref={ref} {...rest} />
         {error ? (
            <StyledParagraph>{error.message}</StyledParagraph>
         ) : null}
      </StyledFieldset>
   ) 
}) 