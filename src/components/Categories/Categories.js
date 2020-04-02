import React, { useEffect } from 'react'
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectActiveCategory, fetchAllCategories } from '../../actions/categoryActions'
import './Categories.scss'



const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    activeCategory: state.categories.activeCategory,
  };
}

const mapDispatchToProps = { selectActiveCategory, fetchAllCategories };


const Categories = ({ categories, activeCategory, selectActiveCategory, fetchAllCategories }) => {

  const fetchData = () => {
    fetchAllCategories();
  };
  useEffect(() => fetchData(), []); //eslint-disable-line
  return (
    <Nav
      className="justify-content-center"
    >
      {categories.map(category => {

        return (
          <Nav.Item onClick={() => { selectActiveCategory(activeCategory === category.normalizedName ? '' : category.normalizedName) }}>
            <Nav.Link className={category.normalizedName === activeCategory ? 'active-category' : 'inactive-category'}>{category.displayName}</Nav.Link>
          </Nav.Item>
        );
      })}

    </Nav >
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

