import { Link } from "react-router-dom";

function ProductCard({ product }) {

    return (
        <article>
            <img src={`${process.env.REACT_APP_IMG_FOLDER}${product.images_small[0]}`} alt={`Cover of ${product.name}`} />
            <Link to={`/${product.category}/${product.url}`} >
                <h3>{product.name}</h3>
            </Link>
            <p>{product.price}<span>€</span></p>
        </article>)
}

export default ProductCard;