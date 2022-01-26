import React from 'react'
import { getMainRight } from '../../api/getMainRight'
import Details from '../../components/Details/Details'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navigation/Navbar/Navbar'
import Wrapper from '../../hoc/Wrapper'

const Books = () => {

    const products = getMainRight();

    return (
        <Wrapper>
            <Header />
            <Navbar />
            {
                products.map((item) => {
                    return (
                        <Details
                            src={item.src}
                            title={item.title}
                            price={item.price}
                            off={item.off}
                        />
                    )
                })
            }
        </Wrapper>
    )
}

export default Books
