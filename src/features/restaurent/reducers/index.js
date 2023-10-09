import { combineReducers } from 'redux'
import { restaurentReducer, addToCartReducer } from './restaurentReducer'

const rootReducers = combineReducers({
    restaurentReducer,
});
export default rootReducers;