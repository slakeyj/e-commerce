import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap'

const mapStateToProps = state => {
  return {
    products: state.products
  }
}



const Products = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>

      </thead>
      <tbody>
        {props.products.map(product => {
          return (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>

            </tr>

          )
        })}
      </tbody>
    </Table>

    // <ul>
    //   {props.products.map(product => {
    //     return (
    //       <li key={product.name}>{product.name}</li>
    //     )
    //   })}
    // </ul>
  )
}

export default connect(mapStateToProps)(Products);


