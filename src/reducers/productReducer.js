
const initialState = [
  { categoryAssociation: 'crochet', name: 'Flowers in the Snow', description: 'granny square blanket', price: '$80', inventory_count: '5', image: 'flowers.jpg' },
  { categoryAssociation: 'knitting', name: 'Scarf', description: 'beige circle scarf', price: '$50', inventory_count: '8', image: 'scarf.jpg' },
  { categoryAssociation: 'embroidery', name: 'Monstera', description: '10 x 10 image of monstera leaf', price: '$40', inventory_count: '4', image: 'monstera.jpg' },
]

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_ACTIVE_CATEGORY':
      if (action.payload === '') return initialState;
      const products = initialState.filter(product => product.categoryAssociation === action.payload);
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