import { createSlice } from "@reduxjs/toolkit";
import { getbyid, getcart, getdata, getproduct } from "../zapros/zapros";

const redus=createSlice({
    name:"redus",
    initialState:{
        data:[],
        databyid:[],
        dataproduct:[],
        datacart:[],
        inpreg:"",
        inpreg1:"",


    },
    reducers:{

        handleChange:(state,action)=>{
            state[action.payload.type]=action.payload.settype
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(getdata.pending, (state,actions)=>{
        })
        builder.addCase(getdata.fulfilled, (state,actions)=>{
            state.data=actions.payload
        })
        builder.addCase(getdata.rejected, (state,actions)=>{
        })
        // getbyid
        builder.addCase(getbyid.pending, (state,actions)=>{
        })
        builder.addCase(getbyid.fulfilled, (state,actions)=>{
            state.databyid=actions.payload
        })
        builder.addCase(getbyid.rejected, (state,actions)=>{
        })
        // getproduct
        builder.addCase(getproduct.pending, (state,actions)=>{
        })
        builder.addCase(getproduct.fulfilled, (state,actions)=>{
            state.dataproduct=actions.payload
        })
        builder.addCase(getproduct.rejected, (state,actions)=>{
        })
        // getcart
        builder.addCase(getcart.pending, (state,actions)=>{
        })
        builder.addCase(getcart.fulfilled, (state,actions)=>{
            state.datacart=actions.payload
        })
        builder.addCase(getcart.rejected, (state,actions)=>{
        })



    }
})

export const { handleChange }=redus.actions
export default redus.reducer  
