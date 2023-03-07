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

  function handleQuantityInput(e, input, product) {
    const quantityInput = document.querySelector(`#${input}`);
    if (!quantityInput.checkValidity()) {
      e.preventDefault();
    } else {
      const index = cart.findIndex((item) => item.id === product.id);
      if (index < 0) {
        setCart(cart.concat(product));
        setCartQuantity(cartQuantity.concat(Number(quantityInput.value)));
      } else if (cartQuantity[index]) {
        const newQuantity = cartQuantity.map((item, i) => {
          if (i === index) {
            return Number(quantityInput.value);
          } else {
            return item;
          }
        });
        setCartQuantity(newQuantity);
      }
    }
  }

  function changeQuantityButtons(e, articleQuantity, input) {
    const quantityInput = document.querySelector(`#${input}`);
    if (e.target.value === "plus") {
      if (quantityInput.value < articleQuantity) {
        quantityInput.value = Number(quantityInput.value) + 1;
      }
    } else {
      if (quantityInput.value > 1) {
        quantityInput.value = Number(quantityInput.value) - 1;
      }
    }
  }

  return (
    <>
      <Header cartQuantity={cartQuantity} />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} handleQuantityInput={handleQuantityInput} changeQuantity={changeQuantityButtons} />} />
        <Route path="/:id"
          element={<ProductDetails cart={cart} setCart={setCart} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} handleQuantityInput={handleQuantityInput} changeQuantity={changeQuantityButtons} />} />
        <Route path="/board-games" element={<FilteredPage products={products.filter((item) => item.category === "board-game")} title="All Board Games" />} />
        <Route path="/card-games" element={<FilteredPage products={products.filter((item) => item.category === "card-game")} title="All Card Games" />} />
        <Route path="/rpg" element={<FilteredPage products={products.filter((item) => item.category === "rpg")} title="All RolePlaying Games" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;