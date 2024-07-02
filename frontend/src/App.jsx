import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placedOrder/PlaceOrder';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/place-order' element={<PlaceOrder />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </>
  )
}

export default App
