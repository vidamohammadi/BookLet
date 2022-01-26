import React from 'react'
import { connect } from 'react-redux'
import shopping from '../../images/shopping-basket.png'
import './Details.css'
import Button from '../UI/Button/Button'
import history from '../../history'
import { Link } from 'react-router-dom'

const Details = (props) => {
    const addToCart = () => {
        history.push(`/cart/${props.id}`)
    }
    return (
        <div className='detailPage'>

            <div className="details">
                <div className="right">
                    <img className="dot" src={props.src} />
                </div>
                <div className="left">
                    <div className="tittle">
                        "{props.title}"
                    </div>

                    <div className="price">
                        <span style={{ textDecoration: "line-through" }}>price : {props.price} $</span>
                        <span className="discount">
                            <span className="discount-right" style={{ color: "yellow", lineHeight: "10px" }}>off  </span>
                            <span className="discount-left">
                                {(props.price * props.off) / 100} $
                            </span>
                        </span>
                    </div>

                    <div className="priceforyou">
                        <span>price for you : </span>
                        <span>{props.price - ((props.price * props.off) / 100)} $</span>
                    </div>


                    <div className="addtocart-btn">
                        <div className="btn-right">
                            <img src={shopping} />
                        </div>
                        <Link to={`/cart/${props.id}`}>
                            <Button btnType="btn-left" click={addToCart}>
                                <span>add to basket</span>
                            </Button>
                        </Link>
                        <script>
                        </script>

                    </div>

                </div>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: () => dispatch({ type: 'ADDTOCART' })
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Details)