import React from 'react'
import './Input.css'

const Input = (props) => {
        return(
            <input 
                className={`input ${props.inputType}`} 
                type="text" 
                value={props.value} 
                onChange={props.onChange} 
                placeholder={props.placeholder}
            />
        )
}

export default Input