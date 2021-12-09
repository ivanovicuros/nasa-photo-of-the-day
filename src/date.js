import React from "react";
import styled from "styled-components";

 const Date = props => {
    const { con } = props

const StyleDiv = styled.div`

margin: 2rem;
display: flex;
justify-content: space-between;
`



    return (
        <StyleDiv className='date'>
            <p>{con.date}</p>
            <p>{con.copyright}</p>
        </StyleDiv>
    )
}




export default Date;