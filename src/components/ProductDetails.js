import { useLocation } from 'react-router-dom';

function ProductDetails({ handleClick }) {
    const location = useLocation();
    const product = location.state;

    return (
        <>
            <h1>{product.name}</h1>
            <img src={product.images[0]} alt="" />
            <div className="thumbnails">
                {product.images.map((image, index) => {
                    return <img key={index} src={image} alt="" />
                }
                )}
            </div>
            <p>{product.description}</p>
            <p>{product.price}€</p>
            <button type="button" onClick={() => handleClick(product)}>Add to cart</button>
        </>)

}

export default ProductDetails;