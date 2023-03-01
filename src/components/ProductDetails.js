import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal';

function ProductDetails({ handleClick }) {
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
            <button type="button" onClick={() => handleClick(state)}>Add to cart</button>
            <Modal selectedImage={selectedImage} zoom={zoom} close={closeZoom} images={state.images} setSelectedImage={setSelectedImage} />
        </div>)

}

export default ProductDetails;