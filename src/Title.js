import React from "react";

 const Title = props => {
    const {  con } = props
    return (
        <div className='title'>
            <h2>{con.title}</h2>
        </div>
    )
}

export default Title;