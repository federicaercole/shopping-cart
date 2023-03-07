import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/shopping-cart">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
