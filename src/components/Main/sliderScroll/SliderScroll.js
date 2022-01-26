import React from 'react'
import './SliderScroll.css'
import { connect } from 'react-redux'
import SliderScrollItem from './SliderScrollItem'
import { getMainRight } from '../../../api/getMainRight'

const SliderScroll = (props) => {
    const sliderScroll = getMainRight()
    const slider = sliderScroll.slice(props.startScroll , props.endScroll );
    return (
        <div className="sliderscroll">
            <h6>Suggestion</h6>
            <div className="sliderscroll-content">
                <div className="sliderscroll-prev" onClick={props.prevHandler}>
                    <span className="prev"></span>
                </div>
                <div className="sliderscroll-main">
                    <ul>
                        {
                            slider.map((item) => {
                                return (
                                    <SliderScrollItem
                                        key={item.id}
                                        id={item.id}
                                        src={item.scrollSrc}
                                        title={item.title}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="sliderscroll-next" onClick={props.nextHandler}>
                    <span className="next"></span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        startScroll : state.startScroll,
        endScroll : state.endScroll
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextHandler: ()=>dispatch({type: 'NEXTSCROLL'}),
        prevHandler: ()=>dispatch({type: 'PREVSCROLL'})
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SliderScroll)