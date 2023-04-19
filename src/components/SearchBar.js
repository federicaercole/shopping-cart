import { searchIcon } from "./icons";

function SearchBar() {
    return <form method="get" action="" role="search">
        <label htmlFor="search" className="visually-hidden">Search game</label>
        <input type="text" id="search" />
        <button type="submit">{searchIcon}<span className="visually-hidden">Search</span></button>
    </form>
}

export default SearchBar;