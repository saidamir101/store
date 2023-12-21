import React, { useEffect } from 'react'
import stir from "../../assets/stir.jpg"
import prosent from "../../assets/prosent.jpg"
import duxi from "../../assets/duxi.jpg"
import ipfon from "../../assets/ipfon.jpg"
import kond from "../../assets/kond.jpg"
import dux from "../../assets/dux.png"
import kitob from "../../assets/kitob.jpg"
import mosh from "../../assets/mosh.jpg"
import naush from "../../assets/naush.jpg"
import nout from "../../assets/nout.jpg"
import pis from "../../assets/pis.jpg"
import str from "../../assets/str.jpg"
import televizor from "../../assets/televizor.jpg"
import tel70 from "../../assets/tel70.webp"
import redmi from "../../assets/redmi.webp"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Card from '../../components/card'
import Card1 from '../../components/card1'
import { useSelector,useDispatch} from 'react-redux'
import { getdata } from '../../zapros/zapros'


function Home() {
  const dispatch=useDispatch()

  const data=useSelector((store)=>store.redus.data)
useEffect(()=>{
  dispatch(getdata())
},[dispatch])
  return (
    
      <main className='px-[8%] pt-[10%] py-[2%]'>
        <section className='bg-[#EAF4FE] px-[8%] py-[5%] flex items-center justify-between  rounded-[10px]'>
          <div className='  flex flex-col gap-10   '>
            <div className='flex flex-col gap-2'>
            <h1 className='text-[40px] font-semibold'>Отдыхайте <br />
             машина постирает</h1>
            <p className='text-[] font-semibold'>Стиральные машины в рассрочку <br /> до  24 месяцев</p>
            </div>
            <button className=' bg-[#FFC945] w-[120px] py-[3%] rounded-[10px] font-bold'>Купить</button>
          </div>
          <div>
            <img className='w-[200px] bg-black' src={stir} alt="" />
          </div>
        </section>

        <section className='py-[5%]'>
          <h1 className='text-[25px] font-semibold'>Популярные категории</h1>
          <div className=' grid   md:grid-cols-4  items-baseline lg:grid-cols-6 gap-10 px-[1%] '>
           {
            data.map((el)=>{
              console.log(el.categoryImage);
              return(
                <div >
                  <Card img={`${import.meta.env.VITE_APP_FILES_URL}${
                          el.categoryImage
                        }`} p={el.categoryName} />
                  {/* <div className='flex flex-col items-center text-center hover:text-[#FFC945] cursor-pointer' >
    <img src={el.categoryImage} alt="" />
    <p className='font-semibold text-[18px]'>{el.categoryName}</p>
  </div> */}

                </div>
              )


            })
           }
            {/* <Card img={ipfon} p={"Cмартфоны и планшеты"} />
            <Card img={kond} p={"Кондиционеры"} />
            <Card img={dux} p={"Парфюмерия"} />
            <Card img={naush} p={"Наушники"} />
            <Card img={televizor} p={"Телевизоры"} />
            <Card img={nout} p={"Ноутбуки"} />
            <Card img={kitob} p={"Книги"} />
            <Card img={mosh} p={"Бытовая техника"} />
            <Card img={pis} p={"Мелкая бытовая техника"} />
            <Card img={str} p={"Строительство и ремонт"} />
            <Card img={dux} p={"Товары для красоты"} /> */}
          </div>
        </section>

        <section className='py-[3%]'>
          <div className='заголовок flex justify-between'>
            <div className='flex items-center gap-4'>
              <h1 className='text-[30px] font-bold'>Самые горячие скидки🔥</h1>
              <p className=' cursor-pointer hover:text-[#FFC945] text-[18px] font-semibold text-[#766f6f]'>Смотреть все</p>
            </div>
            <div className='flex gap-4'>
              <button className=' font-bold bg-gray-200 h-[45px]  w-[45px] rounded-full '><ArrowBackIosIcon/></button>
              <button className=' font-bold bg-[#FFC945] h-[45px] w-[45px] rounded-full '><ArrowForwardIosIcon/></button>

            </div>
          </div>
          <div className='py-[4%] flex flex-wrap justify-between gap-5 items-baseline'>
            <Card1 img={tel70} p={"1220 c."} p1={"1900 c."} p2={"70 c."} p3={"x 24 мeс"} h1={"Телевизор Yasin-Smart32, 32дюйм."} />
            <Card1 img={tel70} p={"1220 c."} p1={"1900 c."} p2={"70 c."} p3={"x 24 мeс"} h1={"Телевизор Yasin-Smart32, 32дюйм."} />
            <Card1 img={tel70} p={"1220 c."} p1={"1900 c."} p2={"70 c."} p3={"x 24 мeс"} h1={"Телевизор Yasin-Smart32, 32дюйм."} />
            <Card1 img={tel70} p={"1220 c."} p1={"1900 c."} p2={"70 c."} p3={"x 24 мeс"} h1={"Телевизор Yasin-Smart32, 32дюйм."} />
            <Card1 img={redmi} p={"1220 c."} p1={"1900 c."} p2={"70 c."} p3={"x 24 мeс"} h1={"Масляный радиатор Nikura NOH844 2900W, белый"} />
           
          </div>
        </section>

      </main>
    
  )
}

export default Home