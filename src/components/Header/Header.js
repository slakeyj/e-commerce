import React from 'react';
import { Button } from 'react-bootstrap';
import './Header.scss'

import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    cartCount: state.cartCount,
    cartContents: state.cartContents
  }
}
const Header = props => {
  return (
    <>
      <header>
        <div className="header">
          <h1>Welcome to the Craft Shop</h1>
          <Button classname="cart-button" variant="outline-dark">Cart {props.cartCount}</Button>
        </div>
      </header>
    </>
  )
}

export default connect(mapStateToProps)(Header);