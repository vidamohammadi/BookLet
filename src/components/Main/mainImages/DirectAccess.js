import React from 'react'
import { Link } from 'react-router-dom'

const DirectAccess = (props) => {
    return (
        <Link to={`/${props.link}`} className={`direct-access ${props.width ? "width" : ""} ${props.margin ? "margin" : ""}`}>
            <img src={props.src} />
        </Link>
    )
}

export default DirectAccess
