import { useLoaderData } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { infoIcon } from './icons';
import { altImages } from './products/productImagesList';
import Modal from './Modal';
import ErrorMessage from './ErrorMessage';
import QuantityInput from './QuantityInput';
import Button from './Button';
import { CartContext } from './CartContext';
import Breadcrumbs from './Breadcrumbs';

function ProductDetails() {
    const { handleQuantityInput, changeQuantityButtons } = useContext(CartContext);
    const { product } = useLoaderData();
    const [zoom, setZoom] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [message, setMessage] = useState("");

    let currentImage = product.images[currentImageIndex];
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
        const imagesArray = [...product.imagesSmall];
        return imagesArray.findIndex((image) => target === image);
    }

    function changeFeaturedImage(e) {
        const featured = document.querySelector(".featured");
        const imgSrc = e.target.getAttribute("src");
        const index = findIndexOfImage(imgSrc);
        setCurrentImageIndex(index);
        featured.setAttribute("src", product.images[currentImageIndex]);
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

        if (product.quantity === 0) {
            input.disabled = true;
            buttons.forEach(button => button.disabled = true)
        }
    }, [product.quantity])

    return (
        <>
            <main className="single-product" key={product.id}>
                <Breadcrumbs />
                <div className="img-container">
                    <div>
                        <img className="featured" src={currentImage} alt={`${altCurrentImage} - Click to zoom`} tabIndex={0} onClick={zoomImage}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    return zoomImage();
                                }
                            }}
                        />
                    </div>
                    <div className="thumbnails">
                        {product.imagesSmall.map((image, index) => {
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
                    <ErrorMessage message={message} id={product.id} quantity={product.quantity} />
                    <Button handle={(e) => handleQuantityInput(e, "quantity", product)} text="Add to Cart" className="cart" />
                </div>
            </main>
            {zoom && <Modal close={closeZoom} images={product.images} currentImage={currentImage} altCurrentImage={altCurrentImage} currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex} />}
        </>)

}

export default ProductDetails;