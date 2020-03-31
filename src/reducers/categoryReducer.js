const initialState = {
  activeCategory: '',
  categories: [
    { normalizedName: 'crochet', displayName: 'Crochet', description: 'crochet stuff' },
    { normalizedName: 'knitting', displayName: 'Knitting', description: 'knitting stuff' },
    { normalizedName: 'embroidery', displayName: 'Embroidery', description: 'embroidery stuff' }
  ]
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_ACTIVE_CATEGORY':
      return { ...state, activeCategory: action.payload };
    default:
      return state;
  }
}

export default categoryReducer;