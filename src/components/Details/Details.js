import React from 'react'
import { useParams } from 'react-router-dom'
import { getMainRight } from '../../api/getMainRight'
import './Details.css'
import Header from '../Header/Header'
import Navbar from '../Navigation/Navbar/Navbar'
import Wrapper from '../../hoc/Wrapper'
import shopping from '../../images/shopping-basket.png'

const Details = () => {
    const { root } = useParams()
    const detail = getMainRight()

    return (
        <Wrapper>
            <Header />
            <Navbar />
            <div className='detailPage'>

                <div className="details">
                    <div className="right">
                        <img className="dot" src={detail[root - 1].src} />
                    </div>
                    <div className="left">
                        <div className="tittle">
                            "{detail[root - 1].title}"
                        </div>

                        <div className="price">
                            <span>price : {detail[root - 1].price} $</span>
                            <span className="discount">
                                <span className="discount-right" style={{color: "yellow" , lineHeight: "10px"}}>off  </span>
                                <span className="discount-left">
                                    {(detail[root - 1].price * detail[root - 1].off) / 100} $
                                </span>
                            </span>
                        </div>

                        <div className="priceforyou">
                            <span>price for you : </span>
                            <span>{detail[root - 1].price - ((detail[root - 1].price * detail[root - 1].off) / 100)} $</span>
                        </div>


                        <div className="addtocart-btn">
                            <div className="btn-right">
                                <img src={shopping} />
                            </div>
                            <div className="btn-left">
                                <span onclick="addToBasket('<?=$productInfo['book_id']; ?>')">add to basket</span>
                            </div>
                            <script>
                            </script>

                        </div>

                    </div>

                </div>

            </div>
        </Wrapper>
    )
}

export default Details
