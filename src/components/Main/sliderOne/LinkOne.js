import React from 'react'

const LinkOne = (props) => {
    return (
        <li onClick={props.onClick} className={`link ${props.click ? "click" : ""}`}>
            <p>{props.title}</p>
        </li>
    )
}

export default LinkOne
