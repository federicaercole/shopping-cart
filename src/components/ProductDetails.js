import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal';
import ErrorMessage from './ErrorMessage';

function ProductDetails({ cart, setCart, cartQuantity, setCartQuantity, message, checkInput, changeQuantity }) {
    let { state } = useLocation();
    const [selectedImage, setSelectedImage] = useState(state.images[0]);
    const [zoom, setZoom] = useState(false);

    function changeFeaturedImage(e) {
        const featured = document.querySelector(".featured");
        const imgSrc = e.target.getAttribute("src");
        setSelectedImage(imgSrc);
        featured.setAttribute("src", imgSrc);
    }

    function zoomImage() {
        setZoom(true);
    }

    function closeZoom() {
        setZoom(false);
    }

    function handleClick(e) {
        const quantityInput = document.querySelector("#quantity");
        if (!quantityInput.checkValidity()) {
            e.preventDefault();
        } else {
            const index = cart.findIndex((item) => item.id === state.id);
            if (index < 0) {
                setCart(cart.concat(state));
                setCartQuantity(cartQuantity.concat(Number(quantityInput.value)));
            } else if (cartQuantity[index]) {
                const newQuantity = cartQuantity.map((item, i) => {
                    if (i === index) {
                        return Number(quantityInput.value);
                    } else {
                        return item;
                    }
                });
                setCartQuantity(newQuantity);
            }
        }
    }

    return (
        <div className="single-product">
            <div className="product-details">
                <h1>{state.name}</h1>
                <p>{state.description}</p>
                <p>{state.price}€</p>
            </div>
            <img className="featured" src={selectedImage} alt="" onClick={zoomImage} />
            <div className="thumbnails">
                {state.images.map((image, index) => {
                    return <img key={index} src={image} alt="" onClick={changeFeaturedImage} />
                }
                )}
            </div>
            <ErrorMessage message={message} quantity={state.quantity} />
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" defaultValue="1" min="1" max={state.quantity} step="1" onChange={(e) => checkInput(e)} required />
            <button type="button" value="plus" onClick={(e) => changeQuantity(e, state.quantity, "#quantity")}>+</button>
            <button type="button" value="minus" onClick={(e) => changeQuantity(e, state.quantity, "#quantity")}>-</button>
            <button type="button" className="addToCart" onClick={handleClick} >Add to cart</button>
            <Modal selectedImage={selectedImage} zoom={zoom} close={closeZoom} images={state.images} setSelectedImage={setSelectedImage} />
        </div>)

}

export default ProductDetails;