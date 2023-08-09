import { useLoaderData } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { infoIcon } from './icons';
import Modal from './Modal';
import ErrorMessage from './ErrorMessage';
import QuantityInput from './QuantityInput';
import Button from './Button';
import { CartContext } from './CartContext';
import Breadcrumbs from './Breadcrumbs';

function ProductDetails() {
    const { handleQuantityInput, changeQuantityButtons } = useContext(CartContext);
    const product = useLoaderData();
    const [zoom, setZoom] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [message, setMessage] = useState("");

    const altImages = ["Cover of the game", "Gameboard and components", "Details of the components"];
    let currentImage = product.images_big[currentImageIndex];
    let altCurrentImage = altImages[currentImageIndex];

    useEffect(() => {
        if (zoom) {
            window.scrollTo(0, 0);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [zoom])

    function checkValidityOnBlur(target) {
        const input = document.querySelector(`#${target}`);
        if (!input.validity.valid) {
            input.setAttribute("aria-invalid", "true");
            if (input.validity.rangeUnderflow) {
                setMessage("You must have at least a quantity of 1");
            } else if (input.validity.valueMissing || input.validity.badInput || input.validity.stepMismatch) {
                setMessage("You must write a valid number");
            } else if (input.validity.rangeOverflow) {
                setMessage("Please write a quantity equal or less than");
            }
        }
    }

    function checkValidityOnChange(target) {
        const input = document.querySelector(`#${target}`);
        if (input.validity.valid) {
            setMessage("");
            input.setAttribute("aria-invalid", "false");
        }
    }

    function findIndexOfImage(target) {
        const imagesArray = [...product.images_small];
        return imagesArray.findIndex((image) => target === `${process.env.REACT_APP_IMG_FOLDER}${image}`);
    }

    function changeFeaturedImage(e) {
        const featured = document.querySelector(".featured");
        const imgSrc = e.target.getAttribute("src");
        const index = findIndexOfImage(imgSrc);
        setCurrentImageIndex(index);
        featured.setAttribute("src", product.images_big[currentImageIndex]);
    }

    function zoomImage() {
        setZoom(true);
    }

    function closeZoom() {
        setZoom(false);
    }

    useEffect(() => {
        const input = document.querySelector("#quantity");
        const buttons = [...document.querySelectorAll(".quantity button")];

        if (product.quantity === 0) {
            input.disabled = true;
            buttons.forEach(button => button.disabled = true)
        }
    }, [product.quantity])

    return (
        <>
            <Breadcrumbs />
            <main className="single-product" key={product.url}>
                <div className="img-container">
                    <button type="button" onClick={zoomImage}>
                        <img className="featured" src={`${process.env.REACT_APP_IMG_FOLDER}${currentImage}`} alt={`${altCurrentImage} - Click to zoom (open a pop-up)`} />
                    </button>
                    <div className="thumbnails">
                        {product.images_small.map((image, index) => {
                            return (
                                <button key={index} type="button" onClick={changeFeaturedImage}>
                                    <img src={`${process.env.REACT_APP_IMG_FOLDER}${image}`} alt={`${altImages[index]} - Click to zoom`} />
                                </button>)
                        }
                        )}
                    </div>
                </div>
                <div className="product-details">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>
                <div className="quantity">
                    <p className="price">{product.price}<span>€</span></p>
                    {product.quantity === 0 && <p className="warning">{infoIcon} Not Available</p>}
                    {product.quantity <= 10 && product.quantity !== 1 && product.quantity !== 0 && <p className="warning">{infoIcon} Only {product.quantity} copies available!</p>}
                    {product.quantity === 1 && <p className="warning">{infoIcon} Only one copy available!</p>}
                    <div>
                        <QuantityInput defaultValue={1} product={product} input="quantity"
                            onBlur={() => checkValidityOnBlur("quantity")}
                            onChange={() => checkValidityOnChange("quantity")}
                            handleButtons={(e) => { changeQuantityButtons(e, product.quantity, "quantity"); checkValidityOnChange("quantity") }} />
                    </div>
                    <ErrorMessage message={message} id={product.url} quantity={product.quantity} />
                    <Button handle={(e) => handleQuantityInput(e, "quantity", product)} text="Add to Cart" className="cart" />
                </div>
            </main>
            {zoom && <Modal close={closeZoom} images={product.images_big} currentImage={currentImage} altCurrentImage={altCurrentImage} currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex} />}
        </>)

}

export default ProductDetails;