import { useEffect, useRef } from "react";
import { closeModal, nextIcon, prevIcon } from "./icons";

function Modal({ close, images, currentImage, currentImageIndex, setCurrentImageIndex, altCurrentImage }) {
    const focusedElement = useRef(null);

    useEffect(() => {
        focusedElement.current.focus();

        const modal = document.querySelector(".modal");
        const firstFocusableElement = modal.querySelectorAll("button")[0];
        const focusableContent = modal.querySelectorAll("button");
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        function focusTrap(e) {
            if (e.key === "Tab" && !e.shiftKey) {
                if (focusedElement.current === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
            else if (e.key === "Tab" && e.shiftKey) {
                if (focusedElement.current === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            }
            else return;
        };

        modal.addEventListener("keydown", e => focusTrap(e));

        return () => {
            modal.removeEventListener("keydown", e => focusTrap(e));
            const featImg = document.querySelector(".featured");
            if (!featImg) {
                return;
            } else {
                featImg.focus();
            }
        }
    }, [])

    useEffect(() => {
        const modal = document.querySelector(".modal");
        function keyboardButtons(e) {
            switch (true) {
                case e.key === "Escape": return close();
                case e.key === "ArrowLeft": return prevImage();
                case e.key === "ArrowRight": return nextImage();
                default: return;
            }
        }
        modal.addEventListener("keydown", e => keyboardButtons(e));

        return () => {
            modal.removeEventListener("keydown", e => keyboardButtons(e));
        }
    });

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
            <div className="modal" onFocus={e => focusedElement.current = e.target}>
                <div><p>Image {currentImageIndex + 1} of {images.length}</p>
                    <button className="close" type="button" onClick={close} ref={focusedElement} >{closeModal}<span className="visually-hidden">Close dialog</span></button>
                </div>
                <div>
                    <button className="arrow" type="button" onClick={prevImage}>{prevIcon}<span className="visually-hidden">Go to previous image</span></button>
                    <button className="arrow" type="button" onClick={nextImage}>{nextIcon}<span className="visually-hidden">Go to next image</span></button>
                </div>
                <div>
                    <img src={currentImage} alt={altCurrentImage} />
                </div>
            </div>
        </>)
}

export default Modal;