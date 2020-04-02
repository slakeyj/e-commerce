const initialState = {
  activeCategory: '',
  categories: []
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'SELECT_ACTIVE_CATEGORY':
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
}

export default categoryReducer;



// { normalizedName: 'crochet', displayName: 'Crochet', description: 'crochet stuff' },
// { normalizedName: 'knitting', displayName: 'Knitting', description: 'knitting stuff' },
// { normalizedName: 'embroidery', displayName: 'Embroidery', description: 'embroidery stuff' }