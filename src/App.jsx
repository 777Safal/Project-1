import React from 'react'
import Navbar from './Components/Layout/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Progrmas from './Pages/Programs/Programs'
import About from './Pages/About/About'
import Campus from './Pages/Campus/Campus'
import Testimonials from './Pages/Testimonials/Testimonials'

const App = () => {
  return (
    <div className='bg-red-600 p-0 m-0 box-border'>
      <Navbar/>
      <Home />
      <Progrmas />
      <About />
      <Campus />
      <Testimonials />
    </div>
  )
}

export default App
