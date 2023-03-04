import { Link } from "react-router-dom";

function ProductCard({ image, title, link, product }) {

    return (
        <article>
            <img src={image} alt="" />
            <Link to={`/${link}`} state={product} >
                <h3>{title}</h3>
            </Link>
        </article>)
}

export default ProductCard;