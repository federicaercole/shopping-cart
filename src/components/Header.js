import { Link } from "react-router-dom";
import { useState } from "react";
import { logo, cartIcon, userIcon, searchIcon } from "./icons";

function Header({ cartQuantity }) {
    const [width, setWidth] = useState(window.innerWidth);
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);

    window.addEventListener("resize", () => {
        setWidth(window.innerWidth)
    });

    return (
        <header>
            <div className="wrapper">
                <Link to="/" className="logo">
                    {logo} Good Board Games
                </Link>
                <Link to="/" className="login">{userIcon} <span className={width < 800 ? "visually-hidden" : ""}>Login</span></Link>
                <Link to="/cart" className="cart">
                    {cartIcon} <span className={width < 800 ? "visually-hidden" : ""}>Cart</span> {totalObj > 0 && <span className="number-objects">{totalObj}</span>}</Link>
                <form method="get" action="" role="search">
                    <label htmlFor="search" className="visually-hidden">Search game</label>
                    <input type="text" id="search" />
                    <button type="submit">{searchIcon}<span className="visually-hidden">Search</span></button>
                </form>

            </div>
            <nav>
                <ul>
                    <Link to="/board-games">
                        <li>Board Games</li>
                    </Link>
                    <Link to="/card-games">
                        <li>Card Games</li>
                    </Link>
                    <Link to="/rpg">
                        <li>Roleplaying Games</li>
                    </Link>
                </ul>
            </nav>
        </header>)
}

export default Header;