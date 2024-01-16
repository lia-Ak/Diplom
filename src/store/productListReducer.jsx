import { createAction, createReducer } from "@reduxjs/toolkit"


const defaultState = []

export const ADD_PRODUCT_LIST = createAction('ADD_PRODUCT_LIST')
export const ADD_DISCOUNTED_PRODUCTS = createAction('ADD_DISCOUNTED_PRODUCTS')
export const PRODUCT_ITEM = createAction('PRODUCT_ITEM')


export default createReducer(defaultState, (builder) => {
    builder
        .addCase(ADD_PRODUCT_LIST, (state, action) => {
            return state = [...action.payload]
        })
        .addCase(ADD_DISCOUNTED_PRODUCTS, (state, action) => {
            return state = action.payload
        })
        .addCase(PRODUCT_ITEM, (state, action) => {
            return state = action.payload
        })
})