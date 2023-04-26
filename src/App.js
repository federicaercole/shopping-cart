import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import SearchResultsPage from "./components/SearchResultsPage";

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let location = useLocation();

  const keyword = location.search.slice(3, location.search.length).split("+").join(" ");

  return (
    <>
      <Header query={query} setQuery={setQuery} setSearchResults={setSearchResults} />
      {location.search !== "" ? <SearchResultsPage keyword={keyword} searchResults={searchResults} /> : <Outlet />}
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default App;