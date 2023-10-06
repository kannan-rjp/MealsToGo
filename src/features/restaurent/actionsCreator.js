import {ADD_TO_CART, GET_INFO} from './actionTypes';

export const getInfo = (data) => {
    return {
        type: GET_INFO,
        payload: data
    }
}

export const addToDo = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}
