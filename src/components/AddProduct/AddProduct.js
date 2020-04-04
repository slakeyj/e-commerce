import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/productActions'

const mapDispatchToProps = { addProduct }

const AddProduct = ({ addProduct }) => {
  const { register, handleSubmit, reset } = useForm();


  // name, description, price, inventory_count, image
  const onSubmit = async data => {
    // this maps the data names from the form.control fields
    await addProduct(data.name, data.description, data.price,
      data.inventory_count, data.image)
    reset();
  }


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Control
        type="text"
        placeholder="Product Name"
        name="name"
        ref={register}
      />
      <Form.Control
        type="text"
        placeholder="Description"
        name="description"
        ref={register}
      />
      <Form.Control
        type="text"
        placeholder="Price"
        name="price"
        ref={register}
      />
      <Form.Control
        type="text"
        placeholder="# In Stock"
        name="inventory_count"
        ref={register}
      />
      <Form.Control
        type="text"
        placeholder="Image"
        name="image"
        ref={register}
      />
      <Button type="submit">Add New Product</Button>
    </Form>
  );
};

export default connect(null, mapDispatchToProps)(AddProduct);
