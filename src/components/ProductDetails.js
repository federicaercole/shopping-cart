import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { infoIcon } from './icons';
import { altImages } from './products/productImagesList';
import Modal from './Modal';
import ErrorMessage from './ErrorMessage';
import QuantityInput from './QuantityInput';
import Button from './Button';

function ProductDetails({ cart, setCart, cartQuantity, setCartQuantity, handleQuantityInput, changeQuantity }) {
    let { state } = useLocation();
    const [zoom, setZoom] = useState(false);
    const [message, setMessage] = useState("");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    let currentImage = state.images[currentImageIndex];
    let altCurrentImage = altImages[currentImageIndex];

    useEffect(() => {
        return (setMessage(""))

    }, [])

    useEffect(() => {
        if (zoom) {
            window.scrollTo(0, 0);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [zoom])

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

    function findIndexOfImage(target) {
        const imagesArray = [...state.images];
        return imagesArray.findIndex((image) => target === image);
    }

    function changeFeaturedImage(e) {
        const featured = document.querySelector(".featured");
        const imgSrc = e.target.getAttribute("src");
        const index = findIndexOfImage(imgSrc);
        setCurrentImageIndex(index);
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
                <div className="img-container">
                    <div>
                        <img className="featured" src={currentImage} alt={altCurrentImage} tabIndex={0} onClick={zoomImage}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    return zoomImage();
                                }
                            }}
                        />
                    </div>
                    <div className="thumbnails">
                        {state.images.map((image, index) => {
                            return <img key={index} src={image} alt={altImages[index]} tabIndex={0} onClick={changeFeaturedImage}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        return changeFeaturedImage(e);
                                    }
                                }} />
                        }
                        )}
                    </div>
                </div>
                <div className="product-details">
                    <h1>{state.name}</h1>
                    <p>{state.description}</p>
                </div>
                <div className="quantity">
                    <p className="price">{state.price}<span>€</span></p>
                    {state.quantity === 0 && <p className="warning">{infoIcon} Not Available</p>}
                    {state.quantity <= 10 && state.quantity !== 1 && state.quantity !== 0 && <p className="warning">{infoIcon} Only {state.quantity} copies available!</p>}
                    {state.quantity === 1 && <p className="warning">{infoIcon} Only one copy available!</p>}
                    <div>
                        <QuantityInput defaultValue={1} product={state} input="quantity" cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}
                            checkInput={checkInput} handleInput={(e) => checkInput(e)}
                            handleButtons={(e) => { changeQuantity(e, state.quantity, "quantity"); checkInput(e) }} />
                    </div>
                    <ErrorMessage message={message} quantity={state.quantity} />
                    <Button handle={(e) => handleQuantityInput(e, "quantity", state)} text="Add to Cart" className="cart" cartQuantity={cartQuantity}
                        setCartQuantity={setCartQuantity} cart={cart} setCart={setCart} />
                </div>
            </main>
            {zoom && <Modal close={closeZoom} images={state.images} currentImage={currentImage} altCurrentImage={altCurrentImage} currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex} />}
        </>)

}

export default ProductDetails;