import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import './Products.scss'
import { reduceStockNumber } from '../../actions/productActions'

const mapStateToProps = state => {
  return {
    products: state.products,
    cartContents: state.cartContents
  }
}

const mapDispatchToProps = { reduceStockNumber };

const Products = props => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>In Stock</th>
            <th></th>
          </tr>

        </thead>
        <tbody>
          {props.products.map(product => {
            return (
              <tr className="product-row" key={product.name}>
                <div></div>
                <img src={require(`./${product.image}`)} alt="product" />
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.inventory_count}</td>
                <td><Button onClick={() => { props.reduceStockNumber(product.name) }}
                  variant="outline-dark" className={product.inventory_count > 0 ? 'display' : 'hide'}>Add To Cart</Button></td>
              </tr>

            )
          })}
        </tbody>
      </Table >
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);


