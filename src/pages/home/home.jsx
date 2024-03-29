import React, { useEffect, useState } from 'react'

import banner from "../../assets/banner.jpg"
import banner1 from "../../assets/banner1.png"


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';




import Card from '../../components/card'
import Card1 from '../../components/card1'
import { useSelector,useDispatch} from 'react-redux'
import { getdata, getproduct, postcart } from '../../zapros/zapros'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'



function Home() {
  const dispatch=useDispatch()
  
  const [modalcart, setModalCart] = useState(false)
  const [idx,setIdx]=useState(0)
  
  setTimeout(() => {
    setModalCart(false)
  },5000);
  
  const data = useSelector((store) => store.redus.data)
  
  
  const dataproduct = useSelector((store) => store.redus.dataproduct)


   

useEffect(()=>{
  dispatch(getdata()),
  dispatch(getproduct())
},[dispatch])
  return (
    <main className="px-[8%] dark:bg-[#262626] pt-[10%] py-[2%]">
      {/* <section className='bg-[#EAF4FE] px-[8%] py-[5%] flex items-center justify-between  rounded-[10px]'>
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
        </section> */}
      <section className=" z-0">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className=" cursor-pointer" src={banner} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className=" cursor-pointer" src={banner1} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="py-[5%]">
        <h1 className="text-[25px] font-semibold">Популярные категории</h1>
        <div className=" grid   md:grid-cols-4  items-baseline lg:grid-cols-6 gap-10 px-[1%] ">
          {data?.map((el) => {
            return (
              <div key={el.id}>
                <Card
                  img={`${import.meta.env.VITE_APP_FILES_URL}${
                    el.categoryImage
                  }`}
                  p={el.categoryName}
                />
                {/* <div className='flex flex-col items-center text-center hover:text-[#FFC945] cursor-pointer' >
    <img src={el.categoryImage} alt="" />
    <p className='font-semibold text-[18px]'>{el.categoryName}</p>
  </div> */}
              </div>
            );
          })}
        
        </div>
      </section>
      <section className="py-[3%]">
        <div className="заголовок flex justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-[30px] font-bold">Самые горячие скидки🔥</h1>
            <p className=" cursor-pointer hover:text-[#FFC945] text-[18px] font-semibold text-[#766f6f]">
              Смотреть все
            </p>
          </div>
          <div className="flex gap-4">
            <button className=" font-bold bg-gray-200 h-[45px]  w-[45px] rounded-full ">
              <ArrowBackIosIcon />
            </button>
            <button className=" font-bold bg-[#FFC945] h-[45px] w-[45px] rounded-full ">
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
        <div className="  flex  py-10  gap-10">
          {Array.isArray(dataproduct.products) &&
            dataproduct.products.map((el) => {
              // dataproduct.products.map((el)=>{
              return (
                // <div className='py-[4%] flex flex-wrap justify-between gap-5'>
                <div
                  key={el.id}
                  className={`flex flex-col items-start w-[30%] h-   gap-1 cursor-pointer  hover:text-[#FFC945]`}
                >
                  <Link
                    className="h-[80%] flex flex-col"
                    key={el.id}
                    to={`/Product/${el.id}`}
                  >
                    <img
                      className="h-[70%] dark:bg-[#262626] w-[100%]"
                      src={`${import.meta.env.VITE_APP_FILES_URL}${el.image}`}
                      alt=""
                    />
                    <div className="text-[] flex gap-2">
                      <p className="text-[18px] text-black font-bold">
                        {el.price}
                      </p>
                      <p className="text-[16px] text-[gray] font-semibold line-through">
                        {"1900 c."}
                      </p>
                    </div>
                    <div className="text-[grey] flex gap-2">
                      <p>{"70 c."}</p>
                      <p>{"x 24 мeс"}</p>
                    </div>
                    <h1 className="font-semibold">{el.productName}</h1>
                  </Link>
                  <button
                    onClick={() => {
                      dispatch(postcart(el.id)), setModalCart(true);
                    }}
                    className="  bg-[#FFC945] text-black w-[] px-[2.5%] flex gap-2 py-[1%]  rounded-[10px] font-semibold"
                  >
                    <span>
                      <ShoppingCartCheckoutIcon />
                    </span>
                    В корзину
                  </button>
                </div>
              );
            })}
        </div>
      </section>
      {/* setModalCart */}
      <Link to={"/Korzina"}>
        <div
          style={{ display: modalcart ? "flex" : "none" }}
          className="bg-[black] text-white justify-between items-center fixed top-[20%] left-[30%] z-50 rounded-[10px] px-[1%] w-[40%] h-[15%]"
        >
          <h1 className="text-[20px]">Товар добавлен в корзину</h1>
          <button className="px-[4%] py-[3%] bg-[#FFC945]">
            Перейти в корзину
          </button>
        </div>
      </Link>
    </main>
  );
}

export default Home