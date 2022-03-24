import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`

 color: ${props => props.theme.primaryColor};

 &:hover {
     color: #041A1B;
     font-style: italic;
     box-shadow: 3px 3px ${props => props.theme.primaryColor}, 
     -1em 0 .4em ${props=>props.theme.secondaryColor};
 }
`




 const Title = props => {
    const {  con } = props
    return (
        <StyledTitle className='title'>
            <h2>{con.title}</h2>
        </StyledTitle>
    )
}

export default Title;