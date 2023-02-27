import { Link } from "react-router-dom";

function ProductInHome({ image, title, link, product }) {

    return (
        <div>
            <img src={image} alt="" />
            <Link to={`${link}`} state={product} >
                <h3>{title}</h3>
            </Link>
        </div>)
}

export default ProductInHome;