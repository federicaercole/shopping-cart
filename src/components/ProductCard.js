import { Link } from "react-router-dom";

function ProductCard({ image, title, link, product, price }) {

    return (
        <article>
            <img src={image} alt={`Cover of ${title}`} />
            <Link to={`/${link}`} state={product} >
                <h3>{title}</h3>
            </Link>
            <p>{price}<span>€</span></p>
        </article>)
}

export default ProductCard;