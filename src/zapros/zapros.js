import { axiosRequest } from "../utils/axiosRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";


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
        console.log(id);
        try {
            const {data}=await axiosRequest.get(`Category/get-category-by-id?id=${id}`)
            return data.data
        } catch (error) {
            console.log(error);
        }
    }
)