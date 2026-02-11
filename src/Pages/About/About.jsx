import React from 'react'
import grd1 from '../../assets/Images/g1.jpg'
import about1 from '../../assets/Images/about1.jpg'
import { FaPlay } from "react-icons/fa6";

const About = () => {
  
  return (
    <div className=' w-full h-screen bg-white'>
      <div className='w-11/12  h-full mx-auto flex items-center justify-center gap-10'>
          <div className='basis-2/5 h-9/12 rounded-xl flex justify-center items-center'
      style={{
            backgroundImage:`url(${about1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center'
            }}>
      <div className='w-20 h-20 text-6xl hover:scale-90 transition ease-in-out cursor-pointer flex items-center justify-center rounded-2xl text-white bg-cyan-400'><FaPlay/></div>  
      </div>
      <div className='basis-2/4 font-momo text-neutral-800'>
            <h1 className='text-base font-bold uppercase text-cyan-400'>About University</h1>
            <h2 className='text-2xl font-bold uppercase my-4'>Neutoring Tommorow's Leaders Today</h2>
            <p className='mb-2 text-sm font-light text-neutral-600 text-justify'>Our University is a leading institution dedicated to academic excellence, innovation, and student success. We provide a supportive learning environment where students are encouraged to explore knowledge, develop critical thinking skills, and build strong professional values. With a commitment to quality education, we aim to prepare students for both local and global opportunities.</p>
            <p className='text-sm font-light text-neutral-600 text-justify'>We offer a wide range of undergraduate and postgraduate programs designed to meet modern academic and industry demands. Our experienced faculty, well-equipped facilities, and student-focused teaching approach help learners gain both theoretical understanding and practical experience. The university also promotes research, creativity, and leadership through workshops, seminars, and community-based learning.</p>
      </div>
      </div>
    </div>
  )
}

export default About
