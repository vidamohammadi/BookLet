import React from 'react'
import { Link } from 'react-router-dom'

const DesTwo = (props) => {
    return (
        <Link className="item" to="product/index/<?= $row['book_id'] ?>">
            <div className="slider2-content-right">
                <div className="price-info">
                    <div className="price-info-old">
                        {props.oldPrice}
                    </div>
                    <div className="price-info-new">
                        {props.newPrice}$
                    </div>
                </div>
                <p style={{ fontSize: "18pt", width: "100%", top: "120px" }}>
                    {props.title}
                </p>
                <br />
                <p style={{ fontSize: "10pt", top: "170px", width: "100%" }}>
                    {props.writer}     
                </p>
            </div>

            <div className="slider2-content-left">
                <p>
                    {props.title}
                </p>
                <img src={props.src} alt={props.title} />
            </div>
        </Link>
    )
}

export default DesTwo
