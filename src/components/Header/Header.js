import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Search from '../Search/Search'
import logo from '../../images/index.png'
import login from '../../images/login.png'

const Header = () => {
    return (
        <header>
            <div className='left'>
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>
            <div className='right'>
                <div className='right login'>
                    <img src={login} />
                    <Link to="/login">
                        <p>Login</p>
                    </Link>
                </div>
                <div className='right search'>
                    <Search />
                </div>

            </div>
        </header>
    )
}

export default Header
