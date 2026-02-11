import React from 'react'

const Title = ({subTitle,title}) => {
  return (
    <div className='w-fit font-momo text-center mb-8'>
      <p className='text-sm mb-2 font-light uppercase'>{subTitle}</p>
      <h1 className='text-2xl font-semibold capitalize'>{title}</h1>
    </div>
  )
}

export default Title
