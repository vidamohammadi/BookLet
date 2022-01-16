import React, { useState } from 'react'
import { connect } from 'react-redux'
import './SliderOne.css'
import { getSliderOne } from '../../../api/getSliderOne'
import ItemOne from './ItemOne'
import LinkOne from './LinkOne'

const SliderOne = (props) => {

    const slider = getSliderOne()

    return (

        <div className="slider">

            <span className="prev" onClick={props.prevHandler}></span>
            <span className="next" onClick={props.nextHandler}></span>

            <div className='sliderMain'>
                <ItemOne
                    alt={slider[props.id].title}
                    src={slider[props.id].src}
                />
           
            </div>

            <div className="sliderNav">
                <ul>
                    {
                        slider.map((item) => {
                            return (
                                <LinkOne
                                    key={item.id}
                                    title={item.title}
                                    click={item.id === props.id+1 ? true : false}
                                    onClick={(id) => props.clickHandler(item.id)} 
                                />
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        id: state.sliderOneId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextHandler: () => dispatch({ type: 'NEXT' }),
        prevHandler: () => dispatch({ type: 'PREV' }),
        clickHandler: (id) => dispatch({type: 'CLICK', id: id})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SliderOne)
