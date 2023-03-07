import { Link } from "react-router-dom";
import { logo, cartIcon } from "./icons";

function Header({ cartQuantity }) {
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);

    return (
        <header>
            <div>
                <Link to="/" className="logo">
                    {logo} Good Board Games
                </Link>
                <Link to="/cart" className="cart">
                    {cartIcon} Cart {totalObj > 0 && totalObj}</Link>
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