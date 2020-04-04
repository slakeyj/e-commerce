
const initialState = {
  allResults: [],
  filteredResults: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_PRODUCTS':
      // need to store all to allResults so we can continue to filter off of it later, set filteredResults to all initially
      return { ...state, allResults: action.payload, filteredResults: action.payload };
    case 'SELECT_ACTIVE_CATEGORY':
      if (action.payload === '') {
        // reset filteredResults back to allresults
        return { ...state, filteredResults: state.allResults };
      }
      const filteredResults = state.allResults.filter(product => product.categoryAssociation === action.payload);
      return { ...state, filteredResults };
    case 'REDUCE_STOCK_NUMBER':
      let allResults = state.allResults.map(product =>
        product.name === action.payload
          ? { ...product, inventory_count: product.inventory_count - 1 } : product
      );
      console.log('allresults', allResults)

      return { ...state, allResults };
    // case 'ADD_PRODUCT':
    //   console.log('payload', action.payload)

    //   state.allResults.push(action.payload)
    //   return { ...state }
    default:
      return state;
  }
}

export default productReducer;