import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import store from '../../store'

const App = () => (
  <Provider store={store}>
    <Container className="App">
      <Header />

      <Footer />
    </Container>
  </Provider>
);


export default App;
