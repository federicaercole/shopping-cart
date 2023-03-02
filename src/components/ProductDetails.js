import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from './Modal';

function ProductDetails({ cart, setCart, cartQuantity, setCartQuantity, message, setMessage }) {
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

    function changeQuantity(e, articleQuantity) {
        const quantityInput = document.querySelector("#quantity");
        if (e.target.value === "plus") {
            if (quantityInput.value < articleQuantity) {
                quantityInput.value = Number(quantityInput.value) + 1;
            }
        } else {
            if (quantityInput.value > 1) {
                quantityInput.value = Number(quantityInput.value) - 1;
            }
        }
    }

    useEffect(() => {
        const quantityInput = document.querySelector("#quantity");
        const button = document.querySelector(".addToCart")

        function handleClick(e) {
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

        function checkInput() {
            if (quantityInput.validity.rangeUnderflow) {
                setMessage("You must have at least a quantity of 1");
            } else if (quantityInput.validity.valueMissing || quantityInput.validity.patternMismatch) {
                setMessage("You must write a valid number");
            } else if (quantityInput.validity.rangeOverflow) {
                setMessage("Please write a quantity less than");
            } else {
                setMessage("");
            }
        }

        button.addEventListener("click", (e) => handleClick(e));
        quantityInput.addEventListener("input", checkInput);

    }, [cartQuantity])

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
            {message !== "" && <p>{message} {message === "Please write a quantity less than" && state.quantity}</p>}
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" defaultValue="1" min="1" max={state.quantity} required />
            <button type="button" value="plus" onClick={(e) => changeQuantity(e, state.quantity)}>+</button>
            <button type="button" value="minus" onClick={(e) => changeQuantity(e, state.quantity)}>-</button>
            <button type="button" className="addToCart" >Add to cart</button>
            <Modal selectedImage={selectedImage} zoom={zoom} close={closeZoom} images={state.images} setSelectedImage={setSelectedImage} />
        </div>)

}

export default ProductDetails;