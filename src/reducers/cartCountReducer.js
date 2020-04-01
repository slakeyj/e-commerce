const cartState = 0;

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case 'REDUCE_STOCK_NUMBER':
      return state + 1;
    default:
      return state;
  }
}

export default cartReducer;