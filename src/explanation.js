import React from "react";

 const Explanation = props => {
    const { con } = props

    return (
        <div className="expanation">
            <p>{con.explanation}</p>
        </div>
    )
}


export default Explanation;