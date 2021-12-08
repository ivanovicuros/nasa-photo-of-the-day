import React from "react";

export default function Section (props) {
    const { cont } = props

    return (
        <div className='section'>
            <h1>{cont.title}</h1>
            <p>{cont.date}</p>
            <img src={cont.url} />
            <p>{cont.explanation}</p>
        </div>
    )
}


