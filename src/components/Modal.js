import { useEffect } from "react";
import { closeModal, nextIcon, prevIcon } from "./icons";
function Modal({ selectedImage, zoom, close, images, setSelectedImage }) {

    useEffect(() => {
        if (zoom) {
            window.scrollTo(0, 0);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [zoom])

    function findIndexOfImage() {
        const imagesArray = [...images];
        return imagesArray.findIndex((image) => selectedImage === image);
    }

    function prevImage() {
        const currentImageIndex = findIndexOfImage();
        if (currentImageIndex === 0) {
            setSelectedImage(images[images.length - 1])
        } else {
            setSelectedImage(images[currentImageIndex - 1]);
        }
    }

    function nextImage() {
        const currentImageIndex = findIndexOfImage();
        if (currentImageIndex === images.length - 1) {
            setSelectedImage(images[0])
        } else {
            setSelectedImage(images[currentImageIndex + 1]);
        }
    }

    if (zoom) {
        return (
            <>
                <div className="modal">
                    <div><p>Image {findIndexOfImage() + 1} of {images.length}</p>
                        <button className="close" type="button" onClick={close}>{closeModal}<span className="visually-hidden">Close dialog</span></button>
                    </div>
                    <div>
                        <button className="arrow" type="button" onClick={prevImage}>
                            {prevIcon}<span className="visually-hidden">Go to previous image</span></button>
                        <button className="arrow" type="button" onClick={nextImage}>{nextIcon}<span className="visually-hidden">Go to next image</span></button>
                    </div>
                    <div>
                        <img src={selectedImage} alt="" />
                    </div>
                </div>
            </>)
    }


}

export default Modal;