import React from 'react'
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectActiveCategory } from '../../actions/categoryActions'
import './Categories.scss'



const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    activeCategory: state.categories.activeCategory,
  };
}

const mapDispatchToProps = { selectActiveCategory };


const Categories = props => {
  return (
    <Nav
      className="justify-content-center"
    >
      {props.categories.map(category => {
        // category.normalizedName === props.activeCategory

        return (
          <Nav.Item onClick={() => { props.selectActiveCategory(props.activeCategory === category.normalizedName ? '' : category.normalizedName) }}>
            <Nav.Link className={category.normalizedName === props.activeCategory ? 'active-category' : 'inactive-category'}>{category.displayName}</Nav.Link>
          </Nav.Item>
        );
      })}

    </Nav >
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

