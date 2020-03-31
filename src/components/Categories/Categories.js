import React from 'react'
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectActiveCategory } from '../../actions/categoryActions'
import { If } from '../If/If'
import './Categories.scss'

/*
{
  categories: {
    activeCategory: '',
    categories: [
      { normalizedName: 'crochet', displayName: 'Crochet', description: 'crochet stuff' },
      { normalizedName: 'knitting', displayName: 'Knitting', description: 'knitting stuff' },
      { normalizedName: 'embroidery', displayName: 'Embroidery', description: 'embroidery stuff' }
    ]
  }
}
*/

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
    activeCategory: state.categories.activeCategory,
  };
}

const mapDispatchToProps = { selectActiveCategory };

// const mapDispatchToProps = dispatch => {
//   return {
//     selectActiveCategory: name => {
//       dispatch(selectActiveCategory(name))
//     }
//   }
// }

const Categories = props => {
  return (
    <Nav
      className="justify-content-center"
    >
      {props.categories.map(category => {
        // category.normalizedName === props.activeCategory

        return (
          <Nav.Item onClick={() => { props.selectActiveCategory(category.normalizedName) }}>
            <If condition={category.normalizedName === props.activeCategory}>
              <Nav.Link className="active-category">{category.displayName}</Nav.Link>
            </If>
            <If condition={category.normalizedName !== props.activeCategory}>
              <Nav.Link className="inactive-category">{category.displayName}</Nav.Link>
            </If>
          </Nav.Item>
        );
      })}

    </Nav >
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

