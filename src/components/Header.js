import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { logo, cartIcon, userIcon } from "./icons";
import SearchBar from "./SearchBar";
import { CartContext } from "./CartContext";

function Header({ query, setQuery, setSearchResults }) {
    const { cartQuantity } = useContext(CartContext);
    const fontSize = 16;
    const [width, setWidth] = useState(window.innerWidth / fontSize); //value in rem
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);

    window.addEventListener("resize", () => {
        setWidth(window.innerWidth / fontSize); //value in rem
    });

    const size800pxInRem = (800 / fontSize);
    const size950pxInRem = (950 / fontSize);

    return (
        <header>
            <div className="wrapper">
                <Link to="/" className="logo">
                    {logo} Good Board Games
                </Link>
                {width >= size950pxInRem && <SearchBar query={query} setQuery={setQuery} setSearchResults={setSearchResults} />}
                <Link to="/" className="login">{userIcon} <span className={width < size800pxInRem ? "visually-hidden" : ""}>Login</span></Link>
                <Link to="/cart" className="cart">
                    {cartIcon} <span className={width < size800pxInRem ? "visually-hidden" : ""}>Cart</span> {totalObj > 0 && <span className="number-objects">{totalObj}</span>}</Link>
                {width < size950pxInRem && <SearchBar query={query} setQuery={setQuery} setSearchResults={setSearchResults} />}

            </div>
            <nav>
                <ul>
                    <li><Link to="/board-games">Board Games</Link></li>
                    <li><Link to="/card-games">Card Games</Link></li>
                    <li><Link to="/rpgs">Roleplaying Games</Link></li>
                </ul>
            </nav>
        </header>)
}

export default Header;