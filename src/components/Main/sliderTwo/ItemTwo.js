import React from 'react'

const ItemTwo = (props) => {
    return (
        <li onClick={props.onClick} className={` ${props.click ? "clickTwo" : ""}`}>
            <p className='title'>
                {props.title}
            </p>
            <span className="dashed"></span>
        </li>
    )
}

export default ItemTwo
