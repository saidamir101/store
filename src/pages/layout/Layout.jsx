import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useSelector,useDispatch } from "react-redux";
import { getbyid, getdata, getsearchprodusct, regis } from "../../zapros/zapros";


import Switcher from "../../components/Switcher"
import ClearIcon from '@mui/icons-material/Clear';
import { handleChange } from "../../reduser/redus";

import { IoClose } from "react-icons/io5";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Layout() {
  const dispatch=useDispatch()

  const [modal,setModal]=useState(false)

  // modal regis 
  const [modalregis, setModalregis] = useState(false)
  

  
  const [modalseacrh, setModalseacrh] = useState(false);

  const offsearch = useRef(null)
  
  function handletarget(e) {
    if (e.target == offsearch.current) setModalseacrh(false);
  }
  



  const data=useSelector((store)=>store.redus.data)
  const databyid=useSelector((store)=>store.redus.databyid)
  const inpreg=useSelector((store)=>store.redus.inpreg)
  const inpreg1=useSelector((store)=>store.redus.inpreg1)
  const searchinp = useSelector((store) => store.redus.searchinp);
  const datasearch = useSelector((store) => store.redus.datasearch);

  console.log(datasearch);
useEffect(()=>{
  dispatch(getdata()),
    dispatch(getbyid());
   dispatch(getsearchprodusct(searchinp));
  }, [dispatch,searchinp])
  return (
    <div>
      {/*  */}
      {/* modalregis */}
      <div
        style={{ display: modalregis ? "flex" : "none" }}
        className=" bg-[#96919186]  fixed justify-center items-center z-20 w-[100%]  h-[100%] "
      >
        <div className="bg-[white] dark:bg-[#262626]  p-[2%]  w-[28%] h-[55%] ">
          <div className="flex justify-between">
            <h1 className="font-semibold text-[20px]">Вход</h1>
            <button onClick={() => setModalregis(false)}>
              <ClearIcon />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center  h-[80%] gap-5">
            <div className="w-[70%]  flex   flex-col">
              <h1 className="text-[14px] text-[#FEBD1F]">логин</h1>
              <input
                value={inpreg}
                onChange={(e) =>
                  dispatch(
                    handleChange({ type: "inpreg", settype: e.target.value })
                  )
                }
                placeholder="Введите логин"
                className="border-[1.5px] focus:border-[#FEBD1F]  outline-none h-[50px] w-[100%]"
                type="text"
              />
            </div>
            <div className="w-[70%]  flex   flex-col">
              <h1 className="text-[14px] text-[] text-[#FEBD1F]">пароль</h1>
              <input
                value={inpreg1}
                onChange={(e) =>
                  dispatch(
                    handleChange({ type: "inpreg1", settype: e.target.value })
                  )
                }
                placeholder="Введите пароль"
                className="border-[1.5px] focus:border-[#FEBD1F] outline-none h-[50px] w-[100%]"
                type="text"
              />
            </div>
            <button
              onClick={() => {
                dispatch(regis({ userName: inpreg, password: inpreg1 })),
                  setModalregis(false);
              }}
              className="px-[20%] h-[20%] rounded-[10px] bg-[#FEBD1F]"
            >
              Вход
            </button>
          </div>
        </div>
      </div>
      {/* modalseacrh */}
      <div
        style={{ display: modalseacrh ? "block" : "none" }}
        className="br-[red] p-[1%] w-[450px] border-[1px]   fixed z-50 bg-white left-[510px] rounded-[10px] top-[75px]"
      >
        <div className="flex justify-end">
          <button onClick={() => setModalseacrh(false)}>
            <IoClose />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {
            datasearch?.products?.map((el) => {
              console.log(el);
              return (
                <>
                  <Link
                    className=""
                    key={el.id}
                    to={`/Product/${el.id}`}
                  >
                    <h1 onClick={()=>setModalseacrh(false)} className="cursor-pointer">{el.productName}</h1>
                  </Link>
                </>
              );
            })

          }
          <h1></h1>
        </div>
      </div>
      <div
        style={{ display: modal ? "flex" : "none" }}
        className="fixed pr-[8%] z-10    gap-5   w-[100%] top-[15%] h-[90%] dark:bg-[#262626] bg-[#fffffff5] "
      >
        <div className="flex overflow-auto flex-col gap-5 pl-[8%] h-[85%] py-[3%] dark:bg-[#262626]  w-[30%] bg-[#F3F4F5]">
          {data.map((el) => {
            return (
              <h1
                key={el.id}
                onMouseOver={() => {
                  dispatch(getbyid(el.id));
                }}
                className=" hover:bg-[white] hover:text-[#FEBD1F] p-[2.5%] font-semibold text-[14.5px] cursor-pointer "
              >
                {el.categoryName}
              </h1>
            );
          })}
        </div>
        <div className="py-[3%] h-[80%] grid  gap-0 w-[80%] grid-cols-3">
          {databyid?.subCategories?.map((el) => {
            return (
              <h1
                key={el.id}
                className="text-[17px] cursor-pointer hover:text-[#FEBD1F]  font-bold"
              >
                {el.subCategoryName}
              </h1>
            );
          })}
        </div>
      </div>
      <header
        onClick={handletarget}
        ref={offsearch}
        className="px-[8%] fixed bg-white dark:bg-[#262626] w-[100%] z-10 py-[1.5%] border-b-2"
      >
        <div className="flex items-center   justify-between">
          <Link to={"/"}>
            <svg
              onClick={() => setModalseacrh(false)}
              width="148"
              height="42"
              viewBox="0 0 148 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M24.1707 10.2237H18.6865L11.3539 28.2268H16.0496L21.4111 14.3236L26.7814 28.2268H31.4683L24.1707 10.2237Z"
                fill="#FFB500"
              ></path>
              <path
                d="M19.4487 41.4641H19.3961C16.6365 41.1925 13.9821 40.3427 11.5729 39.0549C6.95605 36.5231 3.30286 32.2479 1.71719 26.79C0.105229 21.3497 0.876165 15.7604 3.40799 11.1698C4.6958 8.78692 6.46545 6.64932 8.59429 4.941L8.64685 4.91472C11.827 2.30405 15.7254 0.569441 19.9481 0.0262819C19.9744 0.0262819 20.097 0 20.1233 0L21.9105 4.34528C21.8579 4.34528 21.7352 4.37156 21.709 4.37156C17.9331 4.59933 14.4552 6.0098 11.6517 8.27004C11.5992 8.32261 11.5554 8.34889 11.5028 8.39269C11.424 8.44525 11.3802 8.48906 11.3013 8.5679H11.275C11.2488 8.59418 11.2488 8.59418 11.2225 8.62047C9.6368 9.93456 8.31394 11.529 7.35027 13.3162C5.36161 16.9168 4.76589 21.2883 6.03618 25.5373C7.28019 29.8124 10.1362 33.1327 13.7368 35.1214C15.6466 36.1639 17.7579 36.8122 19.9656 37.0049C24.7577 37.3992 29.2781 35.866 32.7561 33.0276C32.9313 32.8787 33.0803 32.7297 33.2555 32.6071L35.0164 36.9524C30.7237 40.2464 25.2395 41.981 19.4487 41.4641Z"
                fill="#FFB500"
              ></path>
              <path
                d="M64.4523 7.75187H61.0006V27.9189H64.4523V7.75187ZM69.2444 11.7993C70.4884 11.7993 71.4082 10.8794 71.4082 9.61789C71.4082 8.37388 70.4884 7.45401 69.2444 7.45401C67.9741 7.45401 67.0104 8.37388 67.0104 9.61789C67.0104 10.8882 67.9565 11.7993 69.2444 11.7993ZM70.9352 13.5164H67.4572V27.9189H70.9352V13.5164ZM81.2902 10.31C81.9122 10.31 82.6832 10.4852 83.603 10.8794L84.6981 8.17238C83.4103 7.52409 82.1137 7.19995 80.8259 7.19995C77.4005 7.19995 75.0877 9.2149 75.0877 12.833V13.5076H72.8012V16.4337H75.0877V27.9101H78.5394V16.4337H83.0336V13.5076H78.5394V12.9382C78.5306 11.2298 79.5031 10.31 81.2902 10.31Z"
                fill="#222222"
              ></path>
              <path
                d="M54.8156 20.7176C54.8156 21.9616 54.4214 22.9779 53.6241 23.8452C52.8269 24.6862 51.5917 25.1154 50.3477 25.1154C49.1036 25.1154 48.0874 24.6949 47.2902 23.8452C46.5193 23.0041 46.125 21.9616 46.125 20.7176C46.125 19.4736 46.5193 18.4311 47.2902 17.6163C48.0874 16.749 49.1036 16.3285 50.3477 16.3285C51.5917 16.3285 52.8269 16.749 53.6241 17.6163C54.4214 18.4574 54.8156 19.4736 54.8156 20.7176ZM54.7367 14.8567C53.4489 13.7354 51.8808 13.1659 50.041 13.1659C48.0086 13.1659 46.0462 13.8843 44.7058 15.3035C43.3391 16.6965 42.6733 18.5099 42.6733 20.6388C42.6733 22.8026 43.3479 24.6336 44.7058 26.0791C46.0462 27.5421 47.9823 28.2605 50.041 28.2605C51.9246 28.2605 53.3175 27.7174 54.7367 26.5697V27.9101H58.0132V13.5164H54.7367V14.8567Z"
                fill="#222222"
              ></path>
              <path
                d="M93.9055 28.243C95.3686 28.243 96.5863 27.8225 97.5324 26.999C98.4523 26.1755 98.9254 25.1593 98.9254 23.9678C98.9254 22.4259 98.1282 21.2345 96.5162 20.3935C96.122 20.1657 95.4737 19.8941 94.6502 19.5524L93.0382 18.8078C92.2673 18.4311 91.8731 17.8354 91.8731 17.0732C91.8731 16.1008 92.6177 15.286 93.9844 15.286C95.2547 15.286 96.2446 15.8292 96.963 16.9505L98.5487 15.5313C97.7077 14.0683 95.938 13.2711 94.1246 13.2711C92.7842 13.2711 91.6628 13.6478 90.8481 14.3662C90.0071 15.1108 89.6041 16.057 89.6041 17.1958C89.6041 18.6589 90.3224 19.8065 91.7417 20.5774C92.0658 20.7789 92.6353 21.0505 93.5026 21.4009C94.3961 21.7776 94.9393 22.0492 95.2372 22.1982C96.1307 22.7238 96.5775 23.337 96.5775 24.108C96.5775 25.2031 95.5613 26.1667 93.9931 26.1667C92.6791 26.1667 91.365 25.3958 90.5415 23.8802L88.728 25.1242C89.8056 27.2005 91.7942 28.243 93.9055 28.243ZM103.691 27.9189V19.9992C103.691 18.7114 104.068 17.6426 104.786 16.8191C105.531 15.9781 106.503 15.5488 107.695 15.5488C109.876 15.5488 111.374 17.1345 111.374 19.9905V27.9101H113.731V19.3159C113.731 17.3798 113.205 15.9168 112.119 14.8918C111.024 13.8493 109.71 13.3499 108.142 13.3499C106.205 13.3499 104.488 14.1734 103.621 15.4612V7.83948H101.335V27.9013H103.691V27.9189ZM115.877 20.814C115.877 22.899 116.569 24.6862 117.989 26.1317C119.381 27.5509 121.169 28.2693 123.306 28.2693C125.47 28.2693 127.231 27.5509 128.641 26.1317C130.034 24.6949 130.726 22.899 130.726 20.814C130.726 18.7552 130.008 16.9856 128.615 15.5488C127.196 14.1121 125.461 13.385 123.297 13.385C121.16 13.385 119.373 14.1033 117.98 15.5488C116.578 16.9943 115.877 18.7552 115.877 20.814ZM128.344 20.814C128.344 22.277 127.871 23.521 126.881 24.5635C125.908 25.5798 124.717 26.0791 123.306 26.0791C121.913 26.0791 120.722 25.5798 119.732 24.5635C118.759 23.521 118.269 22.277 118.269 20.814C118.269 19.3772 118.768 18.1595 119.732 17.1345C120.722 16.092 121.913 15.5488 123.306 15.5488C124.725 15.5488 125.917 16.092 126.881 17.1345C127.879 18.1595 128.344 19.3772 128.344 20.814ZM140.416 13.3937C138.278 13.3937 136.57 14.2347 135.247 15.8993V13.7441H132.89V33.7622H135.247V25.8338C136.535 27.4458 138.226 28.2693 140.337 28.2693C142.396 28.2693 144.086 27.5509 145.427 26.1317C146.793 24.6687 147.486 22.899 147.486 20.8403C147.486 18.7815 146.793 17.0119 145.427 15.5488C144.095 14.1121 142.431 13.3937 140.416 13.3937ZM140.144 26.0791C138.629 26.0791 137.411 25.606 136.517 24.5898C135.597 23.5473 135.151 22.3033 135.151 20.814C135.151 19.351 135.597 18.1069 136.517 17.0907C137.437 16.0745 138.629 15.5488 140.144 15.5488C141.633 15.5488 142.825 16.0745 143.745 17.0907C144.665 18.1069 145.138 19.351 145.138 20.814C145.138 22.3033 144.691 23.5473 143.745 24.5898C142.825 25.5885 141.633 26.0791 140.144 26.0791Z"
                fill="#222222"
              ></path>
            </svg>
          </Link>
          <div
            onClick={() => {
              setModal(modal ? false : true), setModalseacrh(false);
            }}
            className="bg-[#FEBD1F] dark:bg-white hover:bg-[#ffe9b1] cursor-pointer  md:w-[14%] h-[50px] flex items-center justify-center rounded-[10px] "
          >
            <MenuIcon />
            <p className="hidden md:block">Каталог товаров</p>
          </div>
          <div className="flex w-[40%]  ">
            <input
              dir="ltl"
              value={searchinp}
              placeholder="название товара или артикул"
              className="pl-[1%] w-[90%]  border-r-0 outline-[#FEBD1F] font-semibold text-[17px] max-w-[550px]   h-[50px] border-[2px] rounded-s-lg "
              type="search"
              onFocus={() => {
                setModalseacrh(true), setModal(false)
              }}
              onChange={(e)=>dispatch(handleChange({type:"searchinp",settype:e.target.value}))}
            />
            <button
              dir="rtl"
              className="w-[60px] h-[50px] bg-[#FEBD1F] rounded-s-lg "
            >
              <SearchIcon />
            </button>
          </div>
          <div
            onClick={() => setModalseacrh(false)}
            className=" hover:text-[#FEBD1F] hover:cursor-pointer flex flex-col items-center"
          >
            {/* <LocationOnIcon className="" sx={{fontSize:"30px"}}/> */}
            <Switcher />
            <p className="text-[12px] dark:text-[white]  md:text-[14px] text-gray-500 font-semibold">
              Режим
            </p>
          </div>
          <div
            onClick={() => {
              setModalregis(modalregis ? false : true), setModalseacrh(false);
            }}
            className=" hover:text-[#FEBD1F] dark:text-white hover:cursor-pointer flex flex-col items-center"
          >
            <PersonIcon className="" sx={{ fontSize: "30px" }} />
            <p className="text-[12px] dark:text-[white] md:text-[14px] text-gray-500 font-semibold">
              Войти
            </p>
          </div>

          <Link to={"/Korzina"}>
            <div
              onClick={() => setModalseacrh(false)}
              className=" hover:text-[#FEBD1F] dark:text-white hover:cursor-pointer flex flex-col items-center"
            >
              <ShoppingCartIcon className="" sx={{ fontSize: "30px" }} />
              <p className="text-[12px] dark:text-[white]  md:text-[14px] text-gray-500 font-semibold">
                Корзина
              </p>
            </div>
          </Link>
        </div>
      </header>
      <Outlet />
      <footer className="px-[8%] py-[5%] text-[18px] font-semibold  text-white bg-[#222222]">
        <div className="md:flex border-b-2 pb-[2%] border-[gray] justify-between">
          <div className="flex flex-col gap-5">
            <p className="text-[16px] text-[grey]">
              Телефоны справочной службы
            </p>
            <ul className="flex flex-col gap-5">
              <li className=" hover:text-[#FEBD1F] hover:cursor-pointer">
                900
              </li>
              <li className=" hover:text-[#FEBD1F] hover:cursor-pointer">
                +992 48-888-1111
              </li>
              <li className=" hover:text-[#FEBD1F] hover:cursor-pointer">
                @alifshop_tj
              </li>
            </ul>
          </div>
          <ul className="flex flex-col gap-5">
            <li className=" hover:text-[#FEBD1F] hover:cursor-pointer">
              Каталог товаров
            </li>
            <li className=" hover:text-[#FEBD1F] hover:cursor-pointer">
              Смартфоны
            </li>
            <li className=" hover:text-[#FEBD1F] hover:cursor-pointer">
              Телевизоры
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className=" hover:text-[#FEBD1F] hover:cursor-pointer">
              Стиральные машины
            </li>
            <li className=" hover:text-[#FEBD1F] hover:cursor-pointer">
              Кондиционеры
            </li>
          </ul>
          <div className="flex flex-col gap-5">
            <p className="text-[16px] text-[grey]">Мы в соцмедиа</p>
            <div className="flex gap-3">
              <FacebookIcon sx={{ fontSize: "40px" }} />
              <InstagramIcon sx={{ fontSize: "40px" }} />
              <TelegramIcon sx={{ fontSize: "40px" }} />
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[3%] ">
          <p className="text-[10px] md:text-[15px] text-[grey]">
            © 2023 ОАО «Алиф Банк». г. Душанбе, 101 мкр-н, ул. Багаутдинова, 9
          </p>
          <h1 className="hover:text-[#FEBD1F] text-[12px] md:text-[18px] hover:cursor-pointer">
            support@alif.tj
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
