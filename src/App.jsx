import React from 'react'
import Navbar from './Components/Layout/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Progrmas from './Pages/Programs/Progrmas'

const App = () => {
  return (
    <div className='bg-red-600 p-0 m-0 box-border'>
      <Navbar/>
      <Home />
      <Progrmas />
    </div>
  )
}

export default App
