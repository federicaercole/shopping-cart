import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default App;