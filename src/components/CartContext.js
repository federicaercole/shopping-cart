import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState([]);

    function handleQuantityInput(e, input, product) {
        const quantityInput = document.querySelector(`#${input}`);
        if (!quantityInput.checkValidity()) {
            e.preventDefault();
        } else {
            const index = cart.findIndex((item) => item.id === product.id);
            if (index < 0) {
                setCart(cart.concat(product));
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
    }

    function changeQuantityButtons(e, articleQuantity, input) {
        const quantityInput = document.querySelector(`#${input}`);
        if (e.target.value === "plus") {
            if (quantityInput.value < articleQuantity) {
                quantityInput.value = Number(quantityInput.value) + 1;
            }
        } else {
            if (quantityInput.value > 1) {
                quantityInput.value = Number(quantityInput.value) - 1;
            }
        }
    }
    return (
        <CartContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, handleQuantityInput, changeQuantityButtons }}>
            {children}
        </CartContext.Provider>
    )
}