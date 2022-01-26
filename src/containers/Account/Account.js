import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Account.css'
import Wrapper from '../../hoc/Wrapper'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navigation/Navbar/Navbar'

const Account = () => {
  const { route } = useParams()
  const [accountData, setAcountData] = useState({})

  const thisAccount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${route}`)
      .then((response) => {
        setAcountData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  thisAccount()

  return (
    <Wrapper>
      <Header id={accountData.id}/>
      <Navbar id={accountData.id}/>
      <div className='main'>
        <div className="box">
          <div className="header">information</div>
          <div className="content">
            <table>
              <tr>
                <td>
                  <span className="tittle-info">Name :</span>
                  <span className="value"> {accountData.name}</span>
                </td>
                <td>
                  <span className="tittle-info">Email : </span>
                  <span className="value"> {accountData.email}</span>
                </td>
                <td>
                  <span className="tittle-info">User Name :</span>
                  <span className="value"> {accountData.username}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tittle-info">Phone : </span>
                  <span className="value">{accountData.phone}</span>
                </td>
                <td>
                  <span className="tittle-info">Password : </span>
                  <span className="value">{accountData.id}</span>
                </td>
                <td>
                  <span className="tittle-info">Website : </span>
                  <span className="value">{accountData.website}</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Wrapper>
  )
};

export default Account

