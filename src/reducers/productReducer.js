// State should be a list of all products

// Create an action that will trigger the reducer to filter the product list when the active category is changed
// HINT: Different reducers can respond to the same actions
// Create a reducer that will filter the products list based on the active category



// 1. reducer initial state and states returned by reducer must have the same structure
// 2. need to track in state ALL products regardless of whether they are shown currently
// 3. need some way to flag certain products as currently displayed


const initialState = [
  { categoryAssociation: 'crochet', name: 'wool blanket', description: 'granny squares', price: '$80', inventory_count: '3' },
  { categoryAssociation: 'knitting', name: 'scarf', description: 'red and white stripes', price: '$50', inventory_count: '2' },
  { categoryAssociation: 'embroidery', name: 'portrait', description: '10 x 10', price: '$40', inventory_count: '1' },
]

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_ACTIVE_CATEGORY':
      if (action.payload === '') return initialState;
      const products = initialState.filter(product => product.categoryAssociation === action.payload);
      return products;
    default:
      return state;
  }
}

export default productReducer;