import { Link } from "react-router-dom";

function Header({ cartQuantity }) {
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);

    return (
        <header>
            <div>
                <Link to="/">
                    Logo
                </Link>
                <Link to="/cart">Cart {totalObj > 0 && totalObj}</Link>
            </div>
            <nav>
                <ul>
                    <li>Board Games</li>
                    <li>Card Games</li>
                    <li>Roleplaying Games</li>
                    <li>Accessories</li>
                </ul>
            </nav>
        </header>)
}

export default Header;