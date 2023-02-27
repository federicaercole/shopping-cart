import { Link } from "react-router-dom";

function Header() {

    return (
        <header>
            <div>
                <Link to="/">
                    Logo
                </Link>
                <button>Cart</button>
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