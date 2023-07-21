import { createSlice } from "@reduxjs/toolkit";

export interface IOwnItems{
    itemId: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
}
export interface IOwnInitialCartState{
    items: Array<IOwnItems>;
    totalValue: number;
    totalItem: number;
}


export const initialCartState: IOwnInitialCartState = {
    items: [],
    totalValue: 0,
    totalItem: 0
}

export const cartSlice = createSlice({
    name: "cart-slice",
    initialState: initialCartState,
    reducers: {
        addToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item=> item.itemId === newItem.itemId);
            state.totalItem++;
            state.totalValue = state.totalValue + newItem.price;
            if(!existingItem){
                state.items.push({
                    itemId: newItem.itemId,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price
                });
            }else{
               existingItem.quantity++;
               existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        deleteItemFromCart(state, action){
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.itemId === itemId);
            state.totalItem--;
            if(existingItem){              
                state.totalValue = state.totalValue + existingItem.price;
            }
            if(existingItem && existingItem.quantity===1){
                state.items = state.items.filter((item) => item.itemId!==itemId)
            }else if(existingItem && existingItem.quantity>1){
                existingItem && existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }else{
                return;
            }
        }
    }

});

export const cartSliceActions = cartSlice.actions;