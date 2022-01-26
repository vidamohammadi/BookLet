import React from 'react'
import { connect } from 'react-redux'
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

    const validUser = (index) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                props.userName === response.data[index - 1].username ? props.trueHandler() : props.falseHandler()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    validUser(props.password)

    return (

        <Wrapper>
            <Modal 
                show={props.purchased}
                modalClose={props.modalCloseHandler}
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
                                value={props.userName}
                                placeholder="User Name"
                                onChange={(event) => props.setUserName(event.target.value)} />
                        </div>
                        <div className="type" style={{ top: "160px" }}>
                            <label>Password</label>
                            <Input

                                type="input"
                                value={props.password}
                                placeholder="Password"
                                onChange={(event) => props.setPassword(event.target.value)} />
                        </div>
                        {
                            props.auth === true ?

                                <Link to={`/account/${props.password}`}>
                                    <Button btnType='logon-form' click={props.clickHandler}> Login </Button>
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

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        password: state.password,
        purchased: state.purchased,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        trueHandler: () => dispatch({ type: 'TRUE'}),
        falseHandler: () => dispatch({ type: 'FALSE'}),
        modalCloseHandler: () => dispatch({ type: 'PURCHASED'}),
        setUserName : (username) => dispatch({ type: 'USERNAME' , username: username}),
        setPassword : (password) => dispatch({ type: 'PASSWORD' , password: password}),
        clickHandler: (password) => dispatch({type: 'AUTH' , password: password})
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Login)