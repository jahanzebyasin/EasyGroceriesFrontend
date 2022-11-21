import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import ProductList from './Components/Product/ProductList';
import TopBar from './Components/Layout/TopBar';
import { CartProvider } from './Context/CartContext';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <CartProvider>
        <TopBar></TopBar>
        <Container>
          <Routes >
            <Route path="/" element={<ProductList />} > </Route>
          </Routes>
          <Routes >
            <Route path="/checkout" element={<Checkout />} > </Route>
          </Routes>
        </Container>
    </CartProvider>
  );
}

export default App;
