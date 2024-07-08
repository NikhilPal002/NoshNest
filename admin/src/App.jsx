import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from './pages/List'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const url = 'http://localhost:5000';

  return (
    <div className='App'>
      <ToastContainer />
      <Navbar />
      <hr className='w-full border-0 h-px bg-slate-400' />
      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url}  />} />
          <Route path='/orders' element={<Orders url={url}  />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
