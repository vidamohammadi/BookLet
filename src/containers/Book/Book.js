import React from 'react'
import { useParams } from 'react-router-dom'
import { getMainRight } from '../../api/getMainRight'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navigation/Navbar/Navbar'
import Wrapper from '../../hoc/Wrapper'
import Details from '../../components/Details/Details'

const Book = () => {
    const { route } = useParams()
    const detail = getMainRight()

    return (
        <Wrapper>
            <Header />
            <Navbar />
            <Details 
                src={detail[route - 1].src}
                title={detail[route - 1].title}
                price={detail[route - 1].price}
                off={detail[route - 1].off}
                id={detail[route - 1].id}
            />
        </Wrapper>
    )
}

export default Book
