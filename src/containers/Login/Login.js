import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Header from '../../components/Header/Header'
import Wrapper from '../../hoc/Wrapper'
import Navbar from '../../components/Navigation/Navbar/Navbar'
import Modal from '../../components/UI/modal/Modal'

const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState('')
    const [ show , setShow] = useState(true)
    const [ purchased, setPurchased ] = useState(true)

    const validUser = (index) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                userName === response.data[index - 1].username ? setAuth(true) : setAuth(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    validUser(password)

    const modalCloseHandler = () => {
        setPurchased(false)
    }

    return (

        <Wrapper>
            <Modal 
                show={purchased}
                modalClose={modalCloseHandler}
            >
                <p>This login form is using fake api and I am testing call data from api.</p>
                <p>you can login with :</p>
                <p>User Name : "Bret"</p>
                <p>Password : "1"</p>
                <h2>OR</h2>
                <p>you can go to <a href='https://jsonplaceholder.typicode.com/users'>Fake API</a> to use any username as username and id as password. </p>
                
            </Modal>

            <Header />
            <Navbar />
            <div className="main">
                <form>
                    <div className='form'>
                        <div className="type" style={{ top: "80px" }}>
                            <label>User Name</label>
                            <Input 
                                type="input"
                                value={userName}
                                placeholder="User Name"
                                onChange={(event) => setUserName(event.target.value)} />
                        </div>
                        <div className="type" style={{ top: "160px" }}>
                            <label>Password</label>
                            <Input

                                type="input"
                                value={password}
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        {
                            auth === true ?

                                <Link to={`/${password}`}>
                                    <Button btnType='logon-form'> Login </Button>
                                </Link>
                                :
                                <Link to={'/error'}>
                                    <Button btnType='logon-form'> Login </Button>
                                </Link>
                        }
                    </div>
                </form>
            </div>
        </Wrapper>

    )
}

export default Login