import React from 'react'

const ItemOne = (props) => {
    return (
        <div className='sliderMain'>
                <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default ItemOne
