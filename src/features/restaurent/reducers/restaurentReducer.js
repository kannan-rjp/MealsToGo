import {ADD_TO_CART, GET_INFO} from '../actionTypes'

export const restaurentReducer = (state={name: 'praveena', age: 24}, action) => {
    switch(action.type) {
        case ADD_TO_CART: 
            return {
                ...state,
                allRestaurentCollection: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}

export const addToCartReducer = (state={}, action) => {
    switch(action.type) {
        case ADD_TO_CART: 
            return {
                ...state,
                myCartCollection: action.payload
            }
    }
}