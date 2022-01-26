import React from 'react'
import { Link } from 'react-router-dom'

const SliderScrollItem = (props) => {
    return (
        <li>
            <Link to={`/book/${props.id}`}>
                <img src={props.src} alt="" />
                <p>
                    {props.title}
                </p>
            </Link>
        </li>
    )
}

export default SliderScrollItem
