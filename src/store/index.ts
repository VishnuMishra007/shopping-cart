import {configureStore} from "@reduxjs/toolkit";
import { IOwnInitialCartState, cartSlice } from "./cart-slice";
import { IOwnInitialShopCartState, shopSlice } from "./shop-slice";

export interface IStoreReducer{
    cart: IOwnInitialCartState;
    shop: IOwnInitialShopCartState;
}
const store = configureStore({
   reducer: {
    cart: cartSlice.reducer,
    shop: shopSlice.reducer
   } 
});

export default store;