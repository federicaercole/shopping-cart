import { searchIcon } from "./icons";
import { Form } from "react-router-dom";

function SearchBar({ query, setQuery, setSubmittedInput }) {

    return <Form id="search-form" method="get" role="search" action="/search">
        <label htmlFor="search" className="visually-hidden">Search game</label>
        <input key="input" type="text" id="search" name="s" onChange={(e) => setQuery(e.target.value)} />
        <button type="submit" onClick={() => setSubmittedInput(query)}>{searchIcon}<span className="visually-hidden">Search</span></button>
    </Form>
}

export default SearchBar;