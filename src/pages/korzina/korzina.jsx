import React, { useEffect } from "react";
import telec from "../../../src/assets/telec.webp";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { delcart, getcart, inccart, redcart } from "../../zapros/zapros";
function Korzina() {
  const dispatch = useDispatch();
  const datakart = useSelector((store) => store.redus.datacart);
  console.log(datakart[0]?.totalPrice);
  useEffect(() => {
    dispatch(getcart());
  }, [dispatch]);
  return (
    <div className="pt-[10%] flex justify-between pb-[3%] px-[8%]">
      {/* Korzina left  */}
      <div className="w-[60%] flex flex-col gap-5">
        <div className="flex items-end justify-between">
          
            { datakart?.map((el) => {
              return (
                <div className="flex gap-5 items-end">
                  <h1 className="text-[30px] font-bold">Корзина</h1>
                  <p className="text-[16px] font-semibold text-[gray]">
                    {el.totalProducts!=0?el.totalProducts:"0"} товара
                  </p>
                </div>
              );
            })}
          
          <button className="text-[#5C8AB5] font-semibold">
            Очистить корзину
          </button>
        </div>
        <div className="bg-[#F7F8F9] rounded-[20px] p-[3%]">
          <div className="text-[grey] font-semibold  flex justify-between items-center">
            <h1 className="">Способ доставки</h1>
            <h1 className="">Общая сумма</h1>
          </div>
          <div className=" flex text-[18px] font-semibold justify-between items-center">
            <h1 className="">Доставка от Arzon Shop</h1>
            <h1 className="font-bold">0 c.</h1>
          </div>
        </div>
        {}
        <div className="flex flex-wrap w-[100%] justify-between gap-5">
          {datakart[0]?.productsInCart?.map((el) => {
            console.log(el.id);
            return (
              <div className="flex  items-end gap-5">
                <div className="w-[30%] h-[100%] ">
                  <img
                    className=" w-[100%] h-[100%]"
                    src={`${import.meta.env.VITE_APP_FILES_URL}${
                      el.product.image
                    }`}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <div className=" flex justify-between  items-start ">
                    <h1 className="text-[18px] font-bold">
                      {el.product.price}
                    </h1>
                    <p className="text-[grey] line-through">1 900 с.</p>
                    <p className="text-[white] p-[0.5%] font-semibold text-[13px] w-[22%] text-center rounded-[7px] bg-[#FF4444]">
                      -36%
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-[18px]">{el.product.productName}</h1>
                    <h1 className="bg-[#FFE9B3] p-[3%] font-semibold  w-[100%] rounded-[8px]">
                      В рассрочку 69 c. / мес
                    </h1>
                    <h1 className="bg-[#F7F8F9] p-[2%] font-semibold  w-[100%] rounded-[8px]">
                      Бесплатная доставка
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {datakart[0]?.productsInCart.map((el) => {
                    console.log(el.id);
                    return (
                      <div className="border-[1px] w-[100%] rounded-[10px] flex gap-5 py-[5%] px-[20%]">
                        <button
                          style={{ cursor: el.quantity==1?"not-allowed":"pointer"}}
                          onClick={() => dispatch(redcart(el.id))}
                          className="hover:text-[#FFC945] text-[18px]"
                        >
                          -
                        </button>
                        <h1>{el.quantity}</h1>
                        <button
                          onClick={() => dispatch(inccart(el.id))}
                          className="hover:text-[#FFC945] text-[18px]"
                        >
                          +
                        </button>
                      </div>
                    );
                  })}
                  <div
                    onClick={() => dispatch(delcart(el.id))}
                    className="hover:cursor-pointer"
                  >
                    <DeleteOutlineOutlinedIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Korzina right  */}
      <div className="w-[35%] flex flex-col gap-2">
        <h1 className="text-[14px]  text-[grey]">Способ оплаты</h1>
        <div className="flex gap-5">
          <button className="border-2 w-[45%] py-[2%] rounded-[8px]  text-[14px] font-semibold border-[#FEBD1F]">
            В рассрочку
          </button>
          <button className="bg-[#F7F8F9] border-2 w-[45%] py-[2%] rounded-[8px]  text-[14px] font-semibold">
            Наличными
          </button>
        </div>
        {datakart?.map((el) => {
          return (
            <div className="bg-[#F7F8F9] flex flex-col gap-3 p-[5%]  w-[95%]">
              <div className="flex justify-between  ">
                <h1 className="text-[grey] flex gap-5">
                  Товары({el.totalProducts != 0 ? el.totalProducts : "0"})
                </h1>
                <p className="text-[14px]">{el.totalPrice}</p>
              </div>
              <div className="flex justify-between  ">
                <h1 className="text-[grey]">Скидка</h1>
                <p className="text-[14px]">-52 с.</p>
              </div>
              <div className="flex justify-between  ">
                <h1 className="text-[grey]">Общая сумма доставки</h1>
                <p className="text-[14px]">0 с.</p>
              </div>
              <div className="flex justify-between  ">
                <h1 className="text-[grey]">Комиссия за товары (1)</h1>
                <p className="text-[14px]">29 с.</p>
              </div>
              <div className="flex justify-between  ">
                <h1 className="text-[20px] font-semibold">Итого</h1>
                <p className="text-[20px] font-semibold">{el.totalPrice}</p>
                {/* {el.totalPrice} */}
              </div>
              <button className="py-[5%] rounded-[8px]  text-[14px] font-semibold bg-[#FEBD1F] ">
                Перейти к оформлению
              </button>
            </div>
          );
        })} 
      </div>
    </div>
  );
}

export default Korzina;
