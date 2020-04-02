const cartContents = [];

const cartContentsReducer = (state = cartContents, action) => {
  switch (action.type) {
    case 'REDUCE_STOCK_NUMBER':
      console.log('cart contents', cartContents)
      cartContents.push(action.payload);
      return cartContents
    default:
      return state;
  }
}

export default cartContentsReducer;