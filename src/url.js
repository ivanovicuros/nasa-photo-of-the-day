import React from "react";

const Url = props => {
    const { con } = props

    return (
        <div className="image">
            <img
            src={con.url}
            alt="NASA" />
        </div>
    )
}



export default Url;