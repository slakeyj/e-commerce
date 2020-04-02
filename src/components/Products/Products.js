import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import './Products.scss'
import { reduceStockNumber, fetchAllProducts } from '../../actions/productActions'

const mapStateToProps = state => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = { reduceStockNumber, fetchAllProducts };

const Products = ({ products, reduceStockNumber, fetchAllProducts }) => {

  const fetchData = () => {
    fetchAllProducts();
  }
  // eslint-disable-next-line
  useEffect(() => fetchData(), [])
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
          {products.map(product => {
            return (
              <tr className="product-row" key={product.id}>
                <div></div>
                <img src={require(`./${product.image}`)} alt="product" />
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.inventory_count}</td>
                <td><Button onClick={() => { reduceStockNumber(product.name) }}
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


