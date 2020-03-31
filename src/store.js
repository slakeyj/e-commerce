import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoryReducer from './reducers/categoryReducer'
import productReducer from './reducers/productReducer'

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer
});

/*
{
  categories: {
    activeCategory: '',
    categories: [
      { normalizedName: 'crochet', displayName: 'Crochet', description: 'crochet stuff' },
      { normalizedName: 'knitting', displayName: 'Knitting', description: 'knitting stuff' },
      { normalizedName: 'embroidery', displayName: 'Embroidery', description: 'embroidery stuff' }
    ]
  }
}
*/


export default createStore(rootReducer, composeWithDevTools());