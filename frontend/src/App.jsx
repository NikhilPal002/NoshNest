import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

    </div>
  )
}

export default App
