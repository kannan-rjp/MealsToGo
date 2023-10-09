import {ADD_TO_CART, GET_INFO} from './actionTypes';

export const getInfo = (data) => {
    console.log('I am get action')
    return {
        type: GET_INFO,
        payload: data
    }
}

export const addToDo = (data) => {
    console.log('I am addtocart action')
    return {
        type: ADD_TO_CART,
        payload: data
    }
}
