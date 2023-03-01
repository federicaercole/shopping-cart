import { Link } from "react-router-dom";

function Header({ cartQuantity }) {
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);

    return (
        <header>
            <div>
                <Link to="/">Good Board Games</Link>
                <Link to="/cart">Cart {totalObj > 0 && totalObj}</Link>
            </div>
            <nav>
                <ul>
                    <Link to="/board-games">
                        <li>Board Games</li>
                    </Link>
                    <li>Card Games</li>
                    <li>Roleplaying Games</li>
                    <li>Accessories</li>
                </ul>
            </nav>
        </header>)
}

export default Header;