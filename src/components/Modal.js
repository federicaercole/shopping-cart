import { useRef } from "react";
import { closeModal, nextIcon, prevIcon } from "./icons";

function Modal({ close, images, currentImage, currentImageIndex, setCurrentImageIndex, altCurrentImage }) {
    const focusableElements = useRef([]);

    const setFocusableElements = element => {
        if (!element) return;
        if (focusableElements.current.find(focusableElement => focusableElement === element)) return;
        focusableElements.current = [...focusableElements.current, element];
    };

    const focusTrap = (e) => {
        const elements = focusableElements.current;
        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        if (e.key === "Tab" && !e.shiftKey) {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
        else if (e.key === "Tab" && e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        }
        else return;
    };

    function handleKeyboardButtons(e) {
        switch (true) {
            case e.key === "Escape": return close();
            case e.key === "ArrowLeft": return prevImage();
            case e.key === "ArrowRight": return nextImage();
            case e.key === "Tab": return focusTrap(e);
            default: return;
        }
    }

    function prevImage() {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1)
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }

    function nextImage() {
        if (currentImageIndex === images.length - 1) {
            setCurrentImageIndex(0)
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    return (
        <>
            <div role="dialog" className="modal" aria-labelledby="dialog-title" aria-modal="true" onKeyDown={handleKeyboardButtons}>
                <div><h2 id="dialog-title">Image {currentImageIndex + 1} of {images.length}</h2>
                    <button className="close" type="button" onClick={close} ref={setFocusableElements} autoFocus>{closeModal}<span className="visually-hidden">Close</span></button>
                </div>
                <div>
                    <button className="arrow" type="button" onClick={prevImage} ref={setFocusableElements}>{prevIcon}<span className="visually-hidden">Go to previous image</span></button>
                    <button className="arrow" type="button" onClick={nextImage} ref={setFocusableElements}>{nextIcon}<span className="visually-hidden">Go to next image</span></button>
                </div>
                <div>
                    <img src={`${process.env.REACT_APP_IMG_FOLDER}${currentImage}`} alt={altCurrentImage} />
                </div>
            </div>
        </>)
}

export default Modal;