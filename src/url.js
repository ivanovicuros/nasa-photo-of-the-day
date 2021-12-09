import React from "react";
import styled from "styled-components";


const StyledImg = styled.img`
border-radius:50px;
max-width: 50%;
`


const Url = props => {
    const { con } = props

    return (
        <div className="image" >
            <StyledImg
            src={con.url}
            alt="NASA" />
        </div>
    )
}



export default Url;