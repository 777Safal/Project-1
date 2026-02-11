import React, { useEffect, useState } from 'react'
import { GiClassicalKnowledge } from "react-icons/gi";


const Navbar = () => {

    const [scroolled, setScrolled] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 500 ? setScrolled(true) : setScrolled(false);
        });
    },[])
    
    const navdata=[
        {h1:"Home"},
        {h1:"Program"},
        {h1:"About Us"},
        {h1:"Campus"},
        {h1:"Testimonials"},
        {h1:"Contact Us"},
    ]


  return (
    <nav className={`w-full py-4 px-10 z-50 fixed top-0 left-0 flex items-center justify-between font-momo ${scroolled ? "bg-cyan-400 text-white": "text-white"} transition ease-in duration-100`}>
        <div className='text-4xl flex items-center gap-2'>
            <div><GiClassicalKnowledge/></div>
            <h1 className='text-3xl font-bold'>HUB<span className='text-cyan-950'>Edu</span></h1>
        </div>
        <ul className='flex gap-8 mx-4 cursor-pointer '>
            {navdata.map((val,i)=>{
                return <li key={i} className={`text-md hover:transition hover:ease-in-out ${scroolled? "hover:text-cyan-950":"text-white"}`}>
                    {val.h1}
                </li>
            })}
        </ul>
    </nav>
  )
}

export default Navbar
