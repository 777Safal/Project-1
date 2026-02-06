import React from 'react'
import grd1 from '../../assets/Images/g1.jpg'
import grd2 from '../../assets/Images/g2.jpg'
import grd3 from '../../assets/Images/g3.jpg'

function Progrmas() {

    const imgdata=[
        {i1:grd1},
        {i1:grd2},
        {i1:grd3},
    ]
  return (
    
      <div className='w-full h-screen bg-blue-300 px-16 flex items-center justify-between '>
        {imgdata.map((val,i)=>{
            return <div key={i} className='w-[350px] h-fit rounded-4xl overflow-clip'>
                <img src={val.i1} alt='image' className='w-[350px] h-[500px]'/>
            </div>
        })}
      </div>
  )
}

export default Progrmas
