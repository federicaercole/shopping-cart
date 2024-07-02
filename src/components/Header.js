import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { logo, cartIcon, userIcon } from "./icons";
import SearchBar from "./SearchBar";
import { CartContext } from "./CartContext";

function Header({ query, setQuery, setSubmittedInput }) {
    const { cartQuantity } = useContext(CartContext);
    const fontSize = 16;
    const [width, setWidth] = useState(window.innerWidth / fontSize); //value in rem
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth / fontSize); //value in rem
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    function getClassName(windowWidth) {
        return width < (windowWidth / fontSize) ? "visually-hidden" : "";
    }

    return (
        <header>
            <div className="wrapper">
                <Link to="/" className="logo">
                    {logo} Good Board Games
                </Link>

                <Link to="/" className="login">{userIcon} <span className={getClassName(800)}>Login</span></Link>
                <Link to="/cart" className="cart">
                    {cartIcon} <span className={getClassName(800)}>Cart</span> {totalObj > 0 && <span className="number-objects" aria-live="polite" key={totalObj}><span className="visually-hidden">Items:</span> {totalObj}</span>}</Link>
                <SearchBar query={query} setQuery={setQuery} setSubmittedInput={setSubmittedInput} />

            </div>
            <nav aria-label="Categories">
                <ul>
                    <li><Link to="/board-games">Board Games</Link></li>
                    <li><Link to="/card-games">Card Games</Link></li>
                    <li><Link to="/rpgs">Roleplaying Games</Link></li>
                </ul>
            </nav>
        </header>)
}

export default Header;