import { createSlice } from "@reduxjs/toolkit";
import { getbyid, getdata } from "../zapros/zapros";


const redus=createSlice({
    name:"redus",
    initialState:{
        data:[],
        databyid:[]

    },
    redusers:{

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
            console.log(actions.payload);
            state.databyid=actions.payload
        })
        builder.addCase(getbyid.rejected, (state,actions)=>{
        })

    }
})

export default redus.reducer  

export const {}=redus.actions