import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
