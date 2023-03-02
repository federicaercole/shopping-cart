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
  const [message, setMessage] = useState("");

  function changeQuantity(e, articleQuantity, id) {
    const quantityInput = document.querySelector(id);
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

  function checkInput(e) {
    if (e.target.validity.rangeUnderflow) {
      setMessage("You must have at least a quantity of 1");
    } else if (e.target.validity.valueMissing || e.target.validity.patternMismatch || e.target.validity.stepMismatch) {
      setMessage("You must write a valid number");
    } else if (e.target.validity.rangeOverflow) {
      setMessage("Please write a quantity equal or less than");
    } else if (e.target.validity) {
      setMessage("");
    }
  }

  return (
    <>
      <Header cartQuantity={cartQuantity} />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} message={message} changeQuantity={changeQuantity} checkInput={checkInput} />} />
        <Route path="/:id" element={<ProductDetails cart={cart} cartQuantity={cartQuantity} setCart={setCart} setCartQuantity={setCartQuantity} message={message} changeQuantity={changeQuantity} checkInput={checkInput} />} />
        <Route path="/board-games" element={<FilteredPage products={products.filter((item) => item.category === "board-game")} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
