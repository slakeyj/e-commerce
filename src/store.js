
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoryReducer from './reducers/categoryReducer'
import productReducer from './reducers/productReducer';
import cartCountReducer from './reducers/cartCountReducer'
import cartContentsReducer from './reducers/cartContentsReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cartCount: cartCountReducer,
  cartContents: cartContentsReducer
});



export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));