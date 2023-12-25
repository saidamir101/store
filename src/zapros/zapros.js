import { axiosRequest } from "../utils/axiosRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveToken } from "../utils/token";



export const getdata=createAsyncThunk(
    "zapros/getdata",
    async function(){
        try {
            const {data}=await axiosRequest.get(`Category/get-categories`)
            return data.data
        } catch (error) {
            console.log(error);
        }
    }
)
export const getbyid=createAsyncThunk(
    "zapros/getbyid",
    async function(id){
        try {
            const {data}=await axiosRequest.get(`Category/get-category-by-id?id=${id}`)
            return data.data
        } catch (error) {
            console.log(error);
        }
    }
)

export const getproduct=createAsyncThunk(
    "zapros/getproduct",
    async function(){
        try {
            const {data}=await axiosRequest.get(`Product/get-products`)
            return data.data
        } catch (error) {
            console.log(error);
        }
    }
)

export const getcart=createAsyncThunk(
    "zapros/getcart",
    async function(){
        try {
            const {data}=await axiosRequest.get(`Cart/get-products-from-cart`)
            console.log(data.data);
            return data.data
        } catch (error) {
            console.log(error);
        }
    }
)


export const postcart=createAsyncThunk(
    "zapros/postcart",
    async function(id,{dispatch}){
        try {
            const { data } = await axiosRequest.post(
              `Cart/add-product-to-cart?id=${id}`
            );
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
)

export const regis=createAsyncThunk(
    "zapros/regis",
    async function(obj,{dispatch}){
        try {
            const {data}=await axiosRequest.post(`Account/login`,obj)
            saveToken(data.data)
            
        } catch (error) {
            console.log(error);
        }
    }
)
export const delcart = createAsyncThunk(
  "zapros/delcart",
  async function (id, { dispatch }) {
    try {
      const { data } = await axiosRequest.delete(
        `Cart/delete-product-from-cart?id=${id}`
      );
        dispatch(getcart());
    } catch (error) {
      console.log(error);
    }
  }
);
export const inccart = createAsyncThunk(
  "zapros/inccart",
  async function (id, { dispatch }) {
    try {
      const { data } = await axiosRequest.put(
        `Cart/increase-product-in-cart?id=${id}`
      );
      dispatch(getcart());
    } catch (error) {
      console.log(error);
    }
  }
);
export const redcart = createAsyncThunk(
  "zapros/redcart",
  async function (id, { dispatch }) {
    try {
      const { data } = await axiosRequest.put(
        `Cart/reduce-product-in-cart?id=${id}`
      );
      dispatch(getcart());
    } catch (error) {
      console.log(error);
    }
  }
);
