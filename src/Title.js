import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`

 color: #12978C;

 &:hover {
     color: #041A1B;
     font-style: italic;
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