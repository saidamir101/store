import React from 'react'

function Card({img,p}) {
  return (
    <div className='flex flex-col items-center text-center hover:text-[#FFC945] cursor-pointer' >
    <img src={img} alt="" />
    <p className='font-semibold text-[18px]'>{p}</p>
  </div>
  )
}

export default Card