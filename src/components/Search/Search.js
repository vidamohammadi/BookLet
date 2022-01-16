import React from 'react'
import { Link } from 'react-router-dom'
import './Search.css'
import Input from '../UI/Input/Input'
import search from '../../images/search.png'

const Search = () => {
    return (
        <div className='searchTop'>
            <Input inputType="searchInput" value=''
            placeholder="Search..."/>
            <Link to="/search">
                <span>
                    <img src={search} />
                </span>
            </Link>
        </div>
    )
}

export default Search
