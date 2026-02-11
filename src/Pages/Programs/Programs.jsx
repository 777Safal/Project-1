import React from 'react'
import grd1 from '../../assets/Images/g1.jpg'
import grd2 from '../../assets/Images/g2.jpg'
import grd3 from '../../assets/Images/g3.jpg'
import { LuUniversity } from "react-icons/lu";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaUniversity } from "react-icons/fa";
import Title from '../../Components/Title/Title';

function Progrmas() {

    const imgdata=[
        {i1:grd1,h1:"Bachelor Program",icon:<LuUniversity/>},
        {i1:grd2,h1:"Masters Program",icon:<LiaUniversitySolid/>},
        {i1:grd3,h1:"PHD",icon:<FaUniversity/>},
    ]
  return (
    
    <div className='w-full h-screen flex flex-col items-center justify-center bg-white'>
        <Title subTitle='our program' title='what we offer'/>
          <div className='w-full flex items-center justify-center gap-16'>
        {imgdata.map((val,i)=>{
            return <div key={i} className='w-[300px] h-[450px] rounded-4xl overflow-clip relative group'
                    style={{
                        backgroundImage:`url(${val.i1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize:'cover',
                        backgroundPosition:'center'
                    }}>4
                    <div className='opacity-0 group-hover:opacity-100 mt-96 group-hover:mt-0 transition  cursor-pointer ease-in-out w-full h-full absolute top-0 left-0 bg-cyan-950/50 flex flex-col items-center justify-center gap-2 text-white'>
                        <div className='text-6xl w-16 h-16 text-center'>
                            {val.icon}
                        </div>
                        {/* <div className='text-lg font-semibold font-libre'> */}
                          <h1 className=' text-lg font-semibold font-libre'>  {val.h1}</h1>
                        {/* </div> */}
                    </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Progrmas
