
const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_PRODUCTS':
      return action.payload;
    case 'SELECT_ACTIVE_CATEGORY':
      if (action.payload === '') return state;
      const products = state.filter(product => product.categoryAssociation === action.payload);
      return products;
    case 'REDUCE_STOCK_NUMBER':
      return state.map(product =>
        product.name === action.payload
          ? { ...product, inventory_count: product.inventory_count - 1 } : product
      );

    default:
      return state;
  }
}

export default productReducer;