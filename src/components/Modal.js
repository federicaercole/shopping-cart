function Modal({ selectedImage, zoom, close, images, setSelectedImage }) {

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
                <div className="overlay"></div>
                <div className="modal">
                    <div><p>Image {findIndexOfImage() + 1} of {images.length}</p>
                        <button type="button" onClick={close}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <path d="M30 24.398l-8.406-8.398 8.406-8.398-5.602-5.602-8.398 8.402-8.402-8.402-5.598 5.602 8.398 8.398-8.398 8.398 5.598 5.602 8.402-8.402 8.398 8.402z"></path>
                        </svg><span className="visually-hidden">Close dialog</span></button>
                    </div>
                    <img src={selectedImage} alt="" />
                    <div>
                        <button type="button" onClick={prevImage}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                                <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
                            </svg><span className="visually-hidden">Go to previous image</span></button>
                        <button type="button" onClick={nextImage}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                            <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                        </svg><span className="visually-hidden">Go to next image</span></button>
                    </div>
                </div>
            </>)
    }


}

export default Modal;

