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

export const addProduct = (name, description, price, inventory_count, image) => {
  return async dispatch => {
    const raw = await fetch('http://localhost:3001/products', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, inventory_count, image })
    })
    const response = raw.json()
    return dispatch(addProductAction(response));
  }
}

const addProductAction = product => {
  return {
    type: 'ADD_PRODUCT',
    payload: product
  }
}