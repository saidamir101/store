import React, { useEffect, useState } from 'react'
import samsung from "../../assets/samsung.webp"

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { axiosRequest } from '../../utils/axiosRequest';
import { getproduct, postcart} from '../../zapros/zapros';


function Product() {

  const [modalcart, setModalCart] = useState(false);
  const dispatch = useDispatch();

  const dataproduct = useSelector((store) => store.redus.dataproduct);

    

    const { id } = useParams();
    const [data, setData] = useState([])
    
    async function getproductbyid() {
        try {
            const { data } = await axiosRequest.get(
              `Product/get-product-by-id?id=${id}`
            );
            console.log(data.data);
                setData(data.data)
        } catch (error) {
            console.log(error);
        }
    }
     
    
    setTimeout(() => {
        setModalCart(false);
        
    }, 5000);
    
    useEffect(() => {
      getproductbyid()  
      getproduct()
    },[])
    // console.log(data.images[0]);
    return (
      <>
        {
          <main className=" flex dark:bg-[#262626] items-center pb-[4%] pt-[10%] px-[8%]">
            <section className="w-[50%] flex justify-center">
              {
                // data.images.map((el) => {
                //   // console.log(el);
                //   return (
                <img
                  className="h-[450px] bg-[#262626]"
                  src={`${import.meta.env.VITE_APP_FILES_URL}${data?.images}`}
                  // src={`${import.meta.env.VITE_APP_FILES_URL}${el}`}
                  alt=""
                />

                //   )
                // })
              }
            </section>
            <section className="w-[50%] flex flex-col ">
              <div className="flex w-[80%]   flex-col gap-0.2">
                <div className=" flex flex-col gap-0.2">
                  <h1 className="text-[25px]">{data.productName}</h1>
                  <p className="text-[#73787D] font-semibold text-[14px]">
                    Код товара: {data.code}
                  </p>
                </div>
                <h1 className=" font-bold text-[30px]">{data.price}</h1>
                <p className="text-[#73787D] pb-[2%] w-[100%] border-b-[1px] text-[18px]  font-semibold">
                  В рассрочку {data.discountPrice} c. / мес.
                </p>
              </div>
              <div className=" flex flex-col w-[80%] my-[2%] gap-2">
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">Бренд</span>
                  {data.brand}
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">
                    Объём встроенной памяти
                  </span>
                  256 ГБ
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">Модель</span>
                  {data.productName}
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">
                    Объём оперативной памяти
                  </span>
                  8 ГБ
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">Размер</span>
                  {data.size}
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">Mасса</span>
                  {data.weight}
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">Цвет</span>
                  {data.color}
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">
                    Год выпуска
                  </span>
                  2023
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">
                    Процессор
                  </span>
                  Exynos 1380
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D] font-semibold">
                    Разрешение основной камеры
                  </span>
                  50 МП
                </h1>
                <h1 className="flex gap-2 font-semibold">
                  <span className="text-[#73787D]">
                    Разрешение фронтальной камеры
                  </span>
                  32 МП
                </h1>
                <div className="flex items-center justify-between">
                  {/* {
                    Array.isArray(dataproduct.products) &&
                    dataproduct.products.map((el) => { 
                      // console.log(el);
                      return( */}
                      <button
                        onClick={() => {
                          dispatch(postcart(data.id)),
                            setModalCart(true);
                        }}
                        className=" bg-[#FFC945] text-black w-[] px-[2.5%] flex gap-2 py-[1%]  rounded-[10px] font-semibold"
                      >
                        <span>
                          <ShoppingCartCheckoutIcon />
                        </span>
                        В корзину
                      </button>

                      {/* )
                    })

                    } */}
                  <h1 className="text-[#3777AE] font-semibold">
                    Все характеристики
                  </h1>
                </div>
              </div>
            </section>
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
        }
      </>
    );
}

export default Product