import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import banerImage from '../../images/main.png'
import smile from '../../images/smile.png'
import Navbar from '../../components/Navigation/Navbar/Navbar'
import MainRight from '../../components/Main/mainRight/MainRight'
import SliderOne from '../../components/Main/sliderOne/SliderOne'

const Home = () => {
    return (
        <div className='main'>
            <Header />
            <Navbar />
            <div className='baner'>
                <img src={banerImage} />
                <img className='smile' src={smile} />
            </div>
            <div>
                <MainRight />
                <SliderOne />
            </div>
        </div>
    )
}

export default Home
