import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/jost.woff2';
import App from './App';
import Homepage from "./components/Homepage";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import FilteredPage from "./components/FilteredPage";
import { products } from "./components/products/products";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import { CartContextProvider } from './components/CartContext';

function loadProduct({ params }) {
  const product = products.find(item => item.id === params.productId)
  return { product };
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} handle={{ crumb: () => "Home", }}>
      <Route path="/" index element={<Homepage />} />
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
  ), { basename: "/shopping-cart" });

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);