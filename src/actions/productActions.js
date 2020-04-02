export const reduceStockNumber = name => ({
  type: 'REDUCE_STOCK_NUMBER',
  payload: name
});

export const fetchAllProducts = () => {
  return async dispatch => {
    const raw = await fetch('http://localhost:3001/products');
    const data = await raw.json();
    return dispatch(fetchAllProductsAction(data));
  }
}

const fetchAllProductsAction = data => {
  return {
    type: 'FETCH_ALL_PRODUCTS',
    payload: data
  }
}