import { searchIcon } from "./icons";
import Button from "./Button";
import { useRef, useState, useEffect } from "react";
import { Form } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import { useLocation } from "react-router-dom";

function SearchBar({ query, setQuery, setSubmittedInput }) {
    const inputRef = useRef(null);
    const [message, setMessage] = useState("");
    const location = useLocation();

    function handleSubmit(e) {
        const value = inputRef.current.value;

        if (!value) {
            e.preventDefault();
            setMessage("Please write a keyword to start a search");
        } else {
            setSubmittedInput(query);
        }
    }

    function handleChange(e) {
        const value = inputRef.current.value

        if (value) {
            setQuery(e.target.value);
            setMessage("");
        }
    }

    useEffect(() => {
        setMessage("");
    }, [location])

    return (<>
        <Form id="search-form" method="get" role="search" action="/search" >
            <div>
                <label htmlFor="search" className="visually-hidden">Search game</label>
                <input key="input" type="text" id="search" name="s" ref={inputRef} onChange={(e) => handleChange(e)} aria-describedby="error-search" />
                <Button type="submit" handle={(e) => handleSubmit(e)}>{searchIcon}<span className="visually-hidden">Search</span></Button>
            </div>
            <ErrorMessage message={message} id="search" />
        </Form>
    </>)
}

export default SearchBar;