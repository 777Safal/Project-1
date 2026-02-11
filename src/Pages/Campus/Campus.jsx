import React from 'react'
import Title from '../../Components/Title/Title'
import lab from '../../assets/Images/lab.jpg'
import sport from '../../assets/Images/sport.jpg'
import library from '../../assets/Images/library.jpg'
import exm from '../../assets/Images/exm.jpg'
import { GrFormNextLink } from "react-icons/gr";

const Campus = () => {
  
  const imgData= [
    {img1:lab},
    {img1:sport},
    {img1:library},
    {img1:exm},
  ]

  return (
    <div className='w-full h-screen bg-white flex flex-col items-center justify-center'>
      <Title subTitle='Gallery' title='Campus photo'/>
      <div className='w-11/12 h-fit flex  justify-between items-start'>
        {imgData.map((val,i)=>{
          return <div key={i} className='w-72 h-[400px] rounded-xl'
          style={{
            backgroundImage:`url(${val.img1})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'
          }}
          >
          </div>          
        })}
      </div>
      <div className='w-32 h-10 px-2 mt-4 bg-cyan-400 mx-auto text-white font-momo rounded-4xl flex items-center justify-center gap-2 hover:scale-105 hover:transition hover:ease-in-out hover:cursor-pointer '>
        <p>See more</p>
        <GrFormNextLink/>
      </div>
    </div>
  )
}

export default Campus
