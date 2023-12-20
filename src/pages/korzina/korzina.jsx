import React from 'react'
import telec from "../../../src/assets/telec.webp"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Korzina() {
  return (
    <div className='pt-[10%] pb-[3%] px-[8%]'>
      {/* Korzina left  */}
      <div className='w-[55%] flex flex-col gap-5'>
        <div className='flex items-end justify-between'>
          <div className='flex gap-5 items-end'>
          <h1 className='text-[30px] font-bold' >Корзина</h1>
          <p className='text-[16px] font-semibold text-[gray]'>2 товара</p>
          </div>
          <button className='text-[#5C8AB5] font-semibold'>Очистить корзину</button>
        </div>
        <div className='bg-[#F7F8F9] rounded-[20px] p-[3%]'>
          <div className='text-[grey] font-semibold  flex justify-between items-center'>
            <h1 className=''>Способ доставки</h1>
            <h1 className=''>Общая сумма</h1>
          </div>
          <div className=' flex text-[18px] font-semibold justify-between items-center'>
            <h1 className=''>Доставка от Arzon Shop</h1>
            <h1 className='font-bold'>0 c.</h1>
          </div>
        </div>
        <div className='flex items-center'>
          <div className=''>
            <img className='w-[80%]' src={telec} alt="" />
            </div>

            <div className='flex items-end'>
            <div className='flex flex-col gap-5'>

           
          <div className=' flex justify-between gap-1 items-start '>
            <h1 className='text-[18px] font-bold'>1 215 с</h1>
            <p className='text-[grey] line-through'>1 900 с.</p>
            <p className='text-[white] p-[0.5%] font-semibold text-[13px] w-[13%] text-center rounded-[7px] bg-[#FF4444]'>-36%</p>
            <p className='text-[white] p-[0.8%] font-semibold text-[13px] w-[26%] text-center rounded-[7px] bg-[#0073FD]'>+ Подарок</p>

          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-[18px]'>Телевизор Yasin-Smart32, 32дюйм.</h1>
            <h1 className='bg-[#FFE9B3] p-[3%] font-semibold  w-[80%] rounded-[8px]'>В рассрочку 69 c. / мес</h1>
            <h1 className='bg-[#F7F8F9] p-[2%] font-semibold  w-[70%] rounded-[8px]'>Бесплатная доставка</h1>
          </div>
          </div>
          <div className='flex items-center gap-3'>
          <div className='border-[1px] rounded-[10px] flex gap-5 py-[5%] px-[20%]'>
            <button className='hover:text-[#FFC945] text-[18px]'>-</button>
            <h1>1</h1>
            <button className='hover:text-[#FFC945] text-[18px]'>+</button>
          </div>
           <div className='hover:cursor-pointer'>
            <DeleteOutlineOutlinedIcon />
           </div>
          </div>
          </div>
        </div>
      </div>
      {/* Korzina right  */}
      <div>
        <h1>Способ оплаты</h1>
        <div>
          <button className='border-2 border-[#FEBD1F]'>В рассрочку</button>
          <button className='bg-[#F7F8F9]'>Наличными</button>
        </div>
      </div>
      

    </div>
  )
}

export default Korzina