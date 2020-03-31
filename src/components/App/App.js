import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import store from '../../store'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Provider store={store}>
    <Container className="App">
      <Header />
      <Categories />
      <Footer />
    </Container>
  </Provider>
);


export default App;



