import { Link } from "react-router-dom";

function ProductCard({ product }) {

    return (
        <article>
            <img src={product.imagesSmall[0]} alt={`Cover of ${product.name}`} />
            <Link to={`/${product.category + "s"}/${product.id}`} >
                <h3>{product.name}</h3>
            </Link>
            <p>{product.price}<span>€</span></p>
        </article>)
}

export default ProductCard;