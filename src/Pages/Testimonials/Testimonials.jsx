import React from 'react'
import Title from '../../Components/Title/Title'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import user1 from '../../assets/Images/user1.jpg'
import user2 from '../../assets/Images/user2.jpg'
import user3 from '../../assets/Images/user3.jpg'
import user4 from '../../assets/Images/user4.jpg'

const Testimonials = () => {

    const userData=[
        {img:user1, name:'Rayan Cherky', address:'New York, America', 
            description:'Studying at HUBEdu has been one of the best decisions of my life. The teachers are supportive, knowledgeable, and always ready to help. The learning environment is friendly and motivating, and I have gained both academic confidence and practical skills for my future career.'
        },
        {img:user2, name:'Bruno Fernandes', address:'London, UK', 
            description:'HUBEdu provides a perfect balance between theory and real-world learning. The campus facilities are modern, and the classes are interactive and engaging. I especially loved how the university encourages students to participate in workshops, seminars, and extracurricular activities.'
        },
        // {img:user3, name:'Taylor Swift', address:'Los Angels, America', 
        //     description:'The best thing about HUBEdu is the strong support system for students. From quality teaching to career guidance, everything is well-organized. I have improved my communication skills, leadership abilities, and overall personality through the programs offered here.'
        // },
        // {img:user4, name:'Thomas Shalby', address:'Liverpool, UK', 
        //     description:'HUBEdu is not just a place to study—it is a place to grow. The university helped me build strong friendships, develop discipline, and discover my true potential. I am proud to be part of a university that focuses on education, values, and student success.'
        // },
    ]

  return (
    <div className='w-full h-screen bg-white flex flex-col items-center justify-center'>
      <Title subTitle='Testimonials' title='What students says'/>
      <div className='w-11/12 flex justify-center items-center'>
        <div className='w-8 h-8 bg-cyan-400 text-white rounded-full text-2xl flex items-center justify-center hover:cursor-pointer hover:scale-110 transition ease-in-out'><GrFormPrevious/></div>
        <div className="slider w-full p-4 overflow-hidden flex gap-8 ">
            {userData.map((val,i)=>{
                return <div key={i} className='w-2/4 shadow-lg px-2 pb-5'>
                    <div className='flex items-center gap-2'>
                        <div className='w-32 h-32 rounded-full border-4 border-cyan-400' style={{
                        backgroundImage:`url(${val.img})`,
                        backgroundSize:'cover',
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'center'
                        }}></div>
                        <div>
                            <h1 className='text-lg font-medium text-cyan-400'>{val.name}</h1>
                            <h2 className='text-xs font-light'>{val.address}</h2>
                        </div>
                    </div>
                    <div className='w-fit font-momo mt-4'>
                        <p className='text-sm font-light tracking-wide text-neutral-400 w-full'>{val.description}</p>
                    </div>
                </div>
            })}
        </div>
        <div className='w-10 h-10 bg-cyan-400 text-white rounded-full text-2xl flex items-center justify-center hover:cursor-pointer hover:scale-110 transition ease-in-out'><GrFormNext/></div>
      </div>
    </div>
  )
}

export default Testimonials
