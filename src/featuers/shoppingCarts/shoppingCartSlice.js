import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    cart: []

}

const shoppingCartSlice = createSlice({

    name: "shoppingCartSlice",
    initialState,
    reducers: {
        showCart(state) {
            console.log(state);
        },
        addToCard(state, actions) {
            state.cart = state.cart.concat(actions.payload)
        }
    }
});

export const shoppingCart = (state) => state.shoppingCartSlice.cart;
export const { showCart, addToCard } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer