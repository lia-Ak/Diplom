import { createAction, createReducer } from "@reduxjs/toolkit";

const defaultState = []

export const ADD_CATALOG_LIST = createAction('ADD_CATALOG_LIST')
export const CATALOG_LIST = createAction('CATALOG_LIST')

export default createReducer(defaultState, (builder) => {
    builder
        .addCase(ADD_CATALOG_LIST, (state, action)=>{
            return state = [...action.payload]
        })
        .addCase(CATALOG_LIST, (state) => {
            return state.slice(0, 4);
        })
        
})
