import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoryReducer from './reducers/categoryReducer'
import productReducer from './reducers/productReducer';
import cartCountReducer from './reducers/cartCountReducer'
import cartContentsReducer from './reducers/cartContentsReducer'

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cartCount: cartCountReducer,
  cartContents: cartContentsReducer
});



export default createStore(rootReducer, composeWithDevTools());