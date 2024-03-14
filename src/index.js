import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <FilterProvider>
      <App/>
    </FilterProvider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
