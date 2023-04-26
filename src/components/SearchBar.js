import { searchIcon } from "./icons";
import { products } from "./products/products";
import { Form } from "react-router-dom";

function SearchBar({ query, setQuery, setSearchResults }) {

    function getProducts(string) {
        const formattedString = string.trim().toLowerCase();
        const productsCopy = [...products];
        setSearchResults(productsCopy.filter((item) => item.name.toLowerCase().includes(formattedString)));
    }

    return <Form id="search-form" method="get" role="search">
        <label htmlFor="search" className="visually-hidden">Search game</label>
        <input key="input" type="text" id="search" name="s" onChange={(e) => setQuery(e.target.value)} />
        <button type="submit" onClick={() => getProducts(query)}>{searchIcon}<span className="visually-hidden">Search</span></button>
    </Form>
}

export default SearchBar;