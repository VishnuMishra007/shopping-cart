import { createSlice } from "@reduxjs/toolkit";

export interface IOwnInitialShopCartState{
    isShoppingCartVisible: boolean
}

const initialShopSlice: IOwnInitialShopCartState = {
    isShoppingCartVisible: false
}

export const shopSlice = createSlice({
    name: "shop-slice",
    initialState: initialShopSlice,
    reducers: {
        toggle(state){
            return {
            ...state,isShoppingCartVisible: !state.isShoppingCartVisible
            }
        }
    }
});


export const shopSliceActions = shopSlice.actions;