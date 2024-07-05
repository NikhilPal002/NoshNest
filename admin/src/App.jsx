import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <hr className='w-full border-0 h-px bg-slate-400' />
      <div className='flex'>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App
