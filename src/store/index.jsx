import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import { cartReducer } from "./cartReducer";



const rootReducer = combineReducers({
    categoryList: categoryListReducer,
    productList: productListReducer,
    cartData: cartReducer,
})


export const store = configureStore({
    reducer: rootReducer
})