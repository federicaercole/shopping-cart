import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from './Modal';

function ProductDetails({ cart, setCart, cartQuantity, setCartQuantity }) {
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

    function changeQuantity(e) {
        const quantityInput = document.querySelector("#quantity");
        if (e.target.value === "plus") {
            quantityInput.value = Number(quantityInput.value) + 1;
        } else {
            quantityInput.value = Number(quantityInput.value) - 1;
        }
    }

    useEffect(() => {
        const quantityInput = document.querySelector("#quantity");
        const button = document.querySelector(".addToCart")

        function handleClick() {
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
        button.addEventListener("click", handleClick);

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
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" defaultValue="1" min="1" max={state.quantity} />
            <button type="button" value="plus" onClick={changeQuantity}>+</button>
            <button type="button" value="minus" onClick={changeQuantity}>-</button>
            <button type="button" className="addToCart" >Add to cart</button>
            <Modal selectedImage={selectedImage} zoom={zoom} close={closeZoom} images={state.images} setSelectedImage={setSelectedImage} />
        </div>)

}

export default ProductDetails;