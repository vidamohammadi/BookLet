import React from 'react'

const DirectAccess = (props) => {
    return (
        <a className={`direct-access ${props.width ? "width" : ""} ${props.margin ? "margin" : ""}`}>
            <img src={props.src} title={props.title} />
        </a>
    )
}

export default DirectAccess
