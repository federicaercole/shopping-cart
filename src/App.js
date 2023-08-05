import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollRestoration, Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");

  return (
    <>
      <Header query={query} setQuery={setQuery} setSubmittedInput={setSubmittedInput} />
      <Outlet context={submittedInput} />
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default App;