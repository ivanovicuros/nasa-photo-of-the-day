import React from "react";

 const Date = props => {
    const { con } = props

    return (
        <div className='date'>
            <h4>{con.date}</h4>
        </div>
    )
}


export default Date;