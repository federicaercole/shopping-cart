import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState([]);

  useEffect(() => {

  }, [cart])


  function handleClick(object) {
    const index = cart.findIndex((item) => item.id === object.id);
    if (index > -1) {
      const newQuantity = cartQuantity.map((item, i) => {
        if (i === index) {
          return item + 1;
        }
        return item;
      });
      setCartQuantity(newQuantity);
    }
    else {
      setCart(cart.concat(object));
      setCartQuantity(cartQuantity.concat(1));
    }
  }


  return (
    <BrowserRouter>
      <Header cartQuantity={cartQuantity} />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/cart" element={<Cart cart={cart} cartQuantity={cartQuantity} />} />
        <Route path="/:id" element={<ProductDetails handleClick={handleClick} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
