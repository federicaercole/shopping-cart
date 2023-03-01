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
                    <p>Image {findIndexOfImage() + 1} of {images.length}</p>
                    <button type="button" onClick={close}>Close</button>
                    <img src={selectedImage} alt="" />
                    <button type="button" onClick={prevImage}>Previous</button>
                    <button type="button" onClick={nextImage}>Next</button>
                </div>
            </>)
    }


}

export default Modal;

