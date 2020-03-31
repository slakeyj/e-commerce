import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoryReducer from './reducers/categoryReducer'
import productReducer from './reducers/productReducer'

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer
});



export default createStore(rootReducer, composeWithDevTools());