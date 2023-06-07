import { github } from "./icons";
import { Link } from "react-router-dom";
import { logo, fb, twitter } from "./icons";

function Footer() {

    return (<footer>
        <div className="wrapper">
            <section aria-label="Social networks">
                <span className="logo">{logo} Good Board Games</span>
                <p>The best place to find the Good Board Games</p>
                <Link to="/" aria-labelledby="twitter">{twitter}</Link>
                <Link to="/" aria-labelledby="fb">{fb}</Link>
            </section>
            <section aria-labelledby="support">
                <nav aria-labelledby="support">
                    <h2 id="support">Support</h2>
                    <ul>
                        <li> <Link to="/">Shipping and returns</Link></li>
                        <li><Link to="/">Your account</Link></li>
                        <li><Link to="/">Your orders</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">Contact us</Link></li>
                        <li><Link to="/">Report an issue</Link></li>
                    </ul>
                </nav>
            </section>
            <section aria-labelledby="company">
                <nav aria-labelledby="company">
                    <h2 id="company">Company</h2>
                    <ul>
                        <li><Link to="/">About us</Link></li>
                        <li><Link to="/">Our shops</Link></li>
                        <li><Link to="/">Careers</Link></li>
                    </ul>
                </nav>
            </section>
            <div className="notice"><Link to="/">Conditions of Use</Link><Link to="/">Privacy Policy</Link></div>
        </div>
        <div className="info"><a href="https://github.com/federicaercole" aria-labelledby="github">{github}</a> Developed by Federica Ercole. All the images used in this site belong to their respective owners.
        </div>
    </footer >)

}

export default Footer;