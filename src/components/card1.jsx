import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


function Card1({img,p,p1,p2,p3,h1}) {
  return (
    <div className='flex flex-col items-start w-[25%] gap-1 cursor-pointer hover:text-[#FFC945]'>
              <img src={img} alt="" />
              <div className='text-[] flex gap-2'>
                <p className='text-[18px] text-black font-bold'>{p}</p>
                <p className='text-[16px] text-[gray] font-semibold line-through'>{p1}</p>
              </div>
              <div className='text-[grey] flex gap-2'>
                <p>{p2}</p>
                <p>{p3}</p>
              </div>
              <h1 className='font-semibold'>
                {h1}
              </h1>
              <button className=' bg-[#FFC945] text-black w-[] px-[2.5%] flex gap-2 py-[1%] h-[] rounded-[10px] font-semibold'><span><ShoppingCartCheckoutIcon/></span>В корзину</button>

            </div>
  )
}

export default Card1