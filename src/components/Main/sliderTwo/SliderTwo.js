import React from 'react'
import { connect } from 'react-redux'
import './SliderTwo.css'
import { getMainRight } from '../../../api/getMainRight'
import ItemTwo from './ItemTwo'
import DesTwo from './DesTwo'


const SliderTwo = (props) => {

    const slider = getMainRight()

    return (
        <div className="slider2">
            <h6>Offer</h6>
            <div className="slider2-navigator">
                <ul>
                    {
                        slider.map((item) => {
                            return (
                                <ItemTwo
                                    key={item.id}
                                    title={item.title}
                                    click={item.id === props.id+1 ? true : false}
                                    onClick={(id) => props.funHandler(item.id)}
                                />
                            )
                        })
                    }
                </ul>
            </div>
            <div className="slider2-content">
            <DesTwo
                    oldPrice={slider[props.id].price}
                    newPrice={slider[props.id].price - ((slider[props.id].off * slider[props.id].price ) / 100 )}
                    title={slider[props.id].title}
                    writer={slider[props.id].writer}
                    src={slider[props.id].src}
                />
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        id: state.sliderTwoId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        funHandler: (id) => dispatch({ type: 'CLICKTWO' , id: id}),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SliderTwo)