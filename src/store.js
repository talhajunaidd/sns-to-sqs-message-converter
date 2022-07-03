import {configureStore} from "@reduxjs/toolkit";
import transformerSlice from "./features/transformer/transformerSlice";

export const actions = transformerSlice.actions;
const store = configureStore({
    reducer: transformerSlice
})
export default store

