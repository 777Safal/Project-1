import React from 'react'
import { GiClassicalKnowledge } from "react-icons/gi";


const Navbar = () => {
    
    const navdata=[
        {h1:"Home"},
        {h1:"Program"},
        {h1:"About Us"},
        {h1:"Campus"},
        {h1:"Testimonials"},
        {h1:"Contact Us"},
    ]

  return (
    <nav className=' w-full py-4 px-10 z-50 fixed top-0 left-0 flex items-center justify-between font-momo text-white'>
        <div className='text-4xl flex items-center gap-2'>
            <div><GiClassicalKnowledge/></div>
            <h1 className='text-3xl font-bold'>HUB<span className='text-blue-900'>Edu</span></h1>
        </div>
        <ul className='flex gap-8 mx-4 cursor-pointer '>
            {navdata.map((val,i)=>{
                return <li key={i} className='text-md hover:text-blue-900 hover:ease-in-out'>
                    {val.h1}
                </li>
            })}
        </ul>
    </nav>
  )
}

export default Navbar
