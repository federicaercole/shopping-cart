import { searchIcon } from "./icons";
import Button from "./Button";
import { Form } from "react-router-dom";

function SearchBar({ query, setQuery, setSubmittedInput }) {

    return <Form id="search-form" method="get" role="search" action="/search">
        <label htmlFor="search" className="visually-hidden">Search game</label>
        <input key="input" type="text" id="search" name="s" onChange={(e) => setQuery(e.target.value)} />
        <Button type="submit" handle={() => setSubmittedInput(query)}>{searchIcon}<span className="visually-hidden">Search</span></Button>
    </Form>
}

export default SearchBar;