import React from 'react'
import { Link } from 'react-router-dom'
import './ItemRight.css'

const ItemRight = (props) => {
    return (
        <li>
            <div className="line"></div>
            <Link to={`/${props.root}`} className="bestselling">
                <img src={props.src} alt="" />
                <p>{props.title}</p>
            </Link>
        </li>
    )
}

export default ItemRight
