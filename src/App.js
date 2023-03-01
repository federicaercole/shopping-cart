import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import FilteredPage from "./components/FilteredPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { products } from "./components/products/products";


function App() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState([]);

  return (
    <>
      <Header cartQuantity={cartQuantity} />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/cart" element={<Cart cart={cart} cartQuantity={cartQuantity} />} />
        <Route path="/:id" element={<ProductDetails cart={cart} cartQuantity={cartQuantity} setCart={setCart} setCartQuantity={setCartQuantity} />} />
        <Route path="/board-games" element={<FilteredPage products={products.filter((item) => item.category === "board-game")} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
