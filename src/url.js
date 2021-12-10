import React from "react";
import styled from "styled-components";


const StyledImg = styled.img`
border-radius:50px;
max-width: 75%;
border-style: solid;
transition: width 2s, height 2s, background-color 2s, transform 2s;

&:hover {
    transform: rotate(180deg);
}


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