import { configureStore } from "@reduxjs/toolkit";
import redus from "../reduser/redus";
export const store=configureStore({
    reducer:{
    redus,   
    }
})