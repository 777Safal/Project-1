import React from 'react'
import himage from '../../assets/Images/hfront.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";


function Home() {
  return (
    <div className='w-full min-h-screen relative px-16'
    style={{
        backgroundImage:`url(${himage})`,
        backgroundSize: 'cover'

    }}   
    >
        <div className='absolute  top-0 left-0 w-full h-full z-10 bg-blue-900 opacity-50'>
        </div>
    <div className='w-full h-screen font-momo relative z-20 flex flex-col justify-center items-center'>
        <div className='max-w-9/12 text-center text-white text-shadow-2xs text-shadow-neutral-600'>
            <h1 className='text-5xl font-semibold'>Growing Together with Education and Character</h1>
            <p className='text-lg my-7'>
                we believe every child has the power to shine. We focus on quality learning, creativity, and personal growth. With caring teachers, engaging classrooms, and a positive atmosphere, we guide students to become responsible, confident, and successful individuals.
            </p>
        </div>
        <div className=''>
            <button className='w-fit h-10 px-4 flex items-center rounded-4xl bg-white text-blue-900 hover:bg-blue-900 hover:cursor-pointer hover:text-white hover:ease-in-out text-md'>
                Explore More
                <div className='text-xl ml-2'> <IoIosArrowRoundForward/> </div>
            </button>
        </div>
    </div>    
    </div>
  )
}

export default Home
