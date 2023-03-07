import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import ErrorMessage from './ErrorMessage';
import QuantityInput from './QuantityInput';
import Button from './Button';

function ProductDetails({ cart, setCart, cartQuantity, setCartQuantity, handleQuantityInput, changeQuantity }) {
    let { state } = useLocation();
    const [selectedImage, setSelectedImage] = useState(state.images[0]);
    const [zoom, setZoom] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        return (setMessage(""))

    }, [])

    function checkInput(e) {
        if (e.target.validity.rangeUnderflow) {
            setMessage("You must have at least a quantity of 1");
        } else if (e.target.validity.valueMissing || e.target.validity.patternMismatch || e.target.validity.stepMismatch) {
            setMessage("You must write a valid number");
        } else if (e.target.validity.rangeOverflow) {
            setMessage("Please write a quantity equal or less than");
        } else if (e.target.validity) {
            setMessage("");
        }
    }

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
                        <QuantityInput defaultValue={1} product={state} input="quantity" cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}
                            checkInput={checkInput} handleInput={(e) => checkInput(e)}
                            handleButtons={(e) => { changeQuantity(e, state.quantity, "quantity"); checkInput(e) }} />
                    </div>
                    <ErrorMessage message={message} quantity={state.quantity} />
                    <Button handle={(e) => handleQuantityInput(e, "quantity", state)} text="Add to Cart" className="cart" cartQuantity={cartQuantity}
                        setCartQuantity={setCartQuantity} cart={cart} setCart={setCart} />
                </div>
            </main>
            <Modal selectedImage={selectedImage} zoom={zoom} close={closeZoom} images={state.images} setSelectedImage={setSelectedImage} />
        </>)

}

export default ProductDetails;