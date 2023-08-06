import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/jost.woff2';
import { CartContextProvider } from './components/CartContext';
import Router from './components/Router';

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <Router />
    </CartContextProvider>
  </React.StrictMode>
);