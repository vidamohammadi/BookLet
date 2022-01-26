import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Book from './containers/Book/Book'
import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import AllBooks from './containers/AllBooks/AllBooks'
import Account from './containers/Account/Account'
import Cart from './containers/Cart/Cart'
import history from './history';

const App = () => {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account/:route" element={<Account />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/book/:route" element={<Book />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:route" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
