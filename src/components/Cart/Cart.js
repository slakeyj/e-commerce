import React from 'react';
// import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Cart.scss'

const mapStateToProps = state => {
  return {
    products: state.products,
    cartContents: state.cartContents
  }
}

// on click of 'add item to cart', incrment the number on cart button

const Cart = props => {
  return (
    <>
      <h3>Cart Contents</h3>
      <ul>
        {props.cartContents.length > 0 ? props.cartContents.map(product => {
          return (
            <li key={product}>{product}</li>
          )
        })
          : 'Add Items to Cart'}

      </ul>
    </>
  )
}

export default connect(mapStateToProps)(Cart);
