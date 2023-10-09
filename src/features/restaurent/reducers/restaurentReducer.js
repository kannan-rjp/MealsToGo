import {ADD_TO_CART, GET_INFO} from '../actionTypes'

export const restaurentReducer = (state=[{name: 'praveena', age: 24}], action) => {
    switch(action.type) {
        case ADD_TO_CART: 
            return [
                ...state, {name: action.payload.name, age: action.payload.age},
            ]
        default: 
            return state
    }
}
