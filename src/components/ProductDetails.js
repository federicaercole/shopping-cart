import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

    useEffect(() => {
        const input = document.querySelector("#quantity");
        const buttons = [...document.querySelectorAll("button")];
        if (state.quantity === 0) {
            input.disabled = true;
            buttons.forEach(button => button.disabled = true)
        }
    }, [state.quantity])

    return (
        <>
            <main className="single-product">
                <div>
                    <img className="featured" src={selectedImage} alt="" onClick={zoomImage} />
                    <div className="thumbnails">
                        {state.images.map((image, index) => {
                            return <img key={index} src={image} alt="" onClick={changeFeaturedImage} />
                        }
                        )}
                    </div>
                </div>
                <div className="product-details">
                    <h1>{state.name}</h1>
                    <p>{state.description}</p>
                    <p className="price">Price: {state.price}€</p>
                    {state.quantity === 0 && <p className="warning">Not Available</p>}
                    {state.quantity <= 10 && state.quantity !== 1 && state.quantity !== 0 && <p className="warning">Only {state.quantity} copies available!</p>}
                    {state.quantity === 1 && <p className="warning">Only one copy available!</p>}
                    <div className="quantity">
                        <label htmlFor="quantity">Quantity:</label>
                        <input type="number" id="quantity" defaultValue="1" min="1" max={state.quantity} step="1" onChange={(e) => checkInput(e)} required />
                        <button type="button" value="plus" onClick={(e) => { changeQuantity(e, state.quantity, "#quantity"); checkInput(e) }}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">

                            <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                        </svg><span className="visually-hidden">Add 1 to quantity</span></button>
                        <button type="button" value="minus" onClick={(e) => { changeQuantity(e, state.quantity, "#quantity"); checkInput(e) }}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
                        </svg><span className="visually-hidden">Remove 1 to quantity</span></button>
                    </div>
                    <ErrorMessage message={message} quantity={state.quantity} />
                    <button type="button" className="cart" onClick={handleClick}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                        <path d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                        <path d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                        <path d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z"></path>
                    </svg> Add to cart</button>
                </div>
            </main>
            <Modal selectedImage={selectedImage} zoom={zoom} close={closeZoom} images={state.images} setSelectedImage={setSelectedImage} />
        </>)

}

export default ProductDetails;