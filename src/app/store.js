import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "../featuers/shoppingCarts/shoppingCartSlice"
export const store = configureStore({
    reducer: {
        shoppingCartSlice: shoppingCartSlice
    }
})