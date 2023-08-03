import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/jost.woff2';
import App from './App';
import Homepage from "./components/Homepage";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import FilteredPage from "./components/FilteredPage";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import { CartContextProvider } from './components/CartContext';

async function fetchAPI(path) {
  if (path) {
    const response = await fetch(`${process.env.REACT_APP_API}${path}`);
    return await response.json();
  } else {
    const response = await fetch(`${process.env.REACT_APP_API}`);
    return await response.json();
  }
}

async function loadProduct({ params }) {
  const product = await fetchAPI(params.productId);
  return { product };
}

async function loadHomepageProducts() {
  const data = await fetchAPI();
  return { data };
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} handle={{ crumb: () => "Home", }}>
      <Route path="/" index element={<Homepage />} loader={loadHomepageProducts} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/board-games" handle={{ crumb: () => "Board Games" }}>
        <Route index element={<FilteredPage key="board-games" category="board-game" title="All Board Games" />} />
        <Route path=":productId" element={<ProductDetails />} loader={loadProduct} handle={{ crumb: (data) => data.product.name }} />
      </Route>

      <Route path="/card-games" handle={{ crumb: () => "Card Games" }}>
        <Route index element={<FilteredPage key="card-games" category="card-game" title="All Card Games" />} />
        <Route path=":productId" element={<ProductDetails />} loader={loadProduct} handle={{ crumb: (data) => data.product.name }} />
      </Route>

      <Route path="/rpgs" handle={{ crumb: () => "RPGs" }}>
        <Route index element={<FilteredPage key="rpgs" category="rpg" title="All RolePlaying Games" />} />
        <Route path=":productId" element={<ProductDetails />} loader={loadProduct} handle={{ crumb: (data) => data.product.name }} />
      </Route>
    </Route >
  ));

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);