import { createStore } from 'redux'
import rootReducers from './src/features/restaurent/reducers'

const store = createStore(rootReducers)
export default store