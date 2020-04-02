export const selectActiveCategory = name => ({
  type: 'SELECT_ACTIVE_CATEGORY',
  payload: name
});


export const fetchAllCategories = () => {
  console.log('fetching')
  return async dispatch => {
    const raw = await fetch('http://localhost:3001/categories');
    const data = await raw.json();
    return dispatch(fetchAllCategoriesAction(data));
  }
}

const fetchAllCategoriesAction = data => {
  return {
    type: 'FETCH_ALL_CATEGORIES',
    payload: data
  }
}