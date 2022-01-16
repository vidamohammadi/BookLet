import React from 'react'
import './Modal.css'
import Wrapper from '../../../hoc/Wrapper'
import Backdrop from '../backdrop/Backdrop'
import Button from '../Button/Button'

const Modal = (props) =>{
    return (
        <Wrapper>
            <Backdrop show={props.show} click={props.modalClose}/>
            <div 
                className="modal"    
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
                <Button btnType='modal-btn' click={props.modalClose}><p>OK!</p></Button>
            </div>
        </Wrapper>
    )
}

export default Modal