import { useLoaderData } from 'react-router-dom';
import { useState, useEffect, useContext, useRef } from 'react';
import { infoIcon, cartIcon } from './icons';
import Modal from './Modal';
import ErrorMessage from './ErrorMessage';
import QuantityInput from './QuantityInput';
import Button from './Button';
import { CartContext } from './CartContext';
import Breadcrumbs from './Breadcrumbs';
import { useValidateForm } from './useValidateForm';

function ProductDetails() {
    const { handleQuantityInput, changeQuantityButtons } = useContext(CartContext);
    const product = useLoaderData();
    const [zoom, setZoom] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const featImgRef = useRef(null);
    const selectedImage = useRef(null);
    const inputRef = useRef(null);
    const { errorMessage, checkValidityOnBlur, checkValidityOnChange, isInvalid } = useValidateForm();

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

    function findIndexOfImage(target) {
        const imagesArray = [...product.images_small];
        return imagesArray.findIndex(image => target === `/images/${image}`);
    }

    function changeFeaturedImage(e) {
        selectedImage.current = e.currentTarget.firstChild;
        const index = findIndexOfImage(selectedImage.current.getAttribute("src"));
        setCurrentImageIndex(index);
        featImgRef.current.setAttribute("src", `/images/${currentImage}`);
    }

    function zoomImage() {
        setZoom(true);
    }

    function closeZoom() {
        setZoom(false);
        featImgRef.current.focus();
    }

    return (
        <>
            <Breadcrumbs />
            <main className="single-product" key={product.url}>
                <div className="img-container">
                    <Button handle={zoomImage} innerRef={featImgRef}>
                        <img className="featured" src={`/images/${currentImage}`} alt={`${altCurrentImage} - Click to zoom (open a pop-up)`} />
                    </Button>
                    <div className="thumbnails">
                        {product.images_small.map((image, index) => {
                            return (
                                <Button key={index} handle={changeFeaturedImage}>
                                    <img src={`/images/${image}`} alt={`${altImages[index]} - Click to zoom`} />
                                </Button>)
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
                        <QuantityInput product={product}
                            onBlur={() => checkValidityOnBlur(inputRef.current, product)}
                            onChange={() => checkValidityOnChange(inputRef.current)}
                            handleButtons={(e) => { changeQuantityButtons(e, product.quantity, inputRef.current); checkValidityOnChange(inputRef.current) }}
                            ref={inputRef}
                            isInvalid={isInvalid()} />
                    </div>
                    <ErrorMessage message={errorMessage} id={product.url} />
                    <Button handle={(e) => handleQuantityInput(e, inputRef.current, product)} className="cart" disabled={!product.quantity}>{cartIcon} Add to cart</Button>
                </div>
            </main>
            {zoom && <Modal close={closeZoom} images={product.images_big} currentImage={currentImage} altCurrentImage={altCurrentImage} currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex} />}
        </>)

}

export default ProductDetails;