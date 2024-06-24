import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState([]);

    function handleQuantityInput(e, input, product) {
        if (!input.checkValidity()) {
            e.preventDefault();
        } else {
            const index = cart.findIndex((item) => item.url === product.url);
            if (index < 0) {
                setCart(cart.concat(product));
                setCartQuantity(cartQuantity.concat(Number(input.value)));
            } else if (cartQuantity[index]) {
                const newQuantity = cartQuantity.map((item, i) => {
                    if (i === index) {
                        return Number(input.value);
                    } else {
                        return item;
                    }
                });
                setCartQuantity(newQuantity);
            }
        }
    }

    function changeQuantityButtons(e, articleQuantity, input) {
        if (e.target.value === "plus") {
            if (input.value < articleQuantity) {
                input.value = Number(input.value) + 1;
            }
        } else {
            if (input.value > 1) {
                input.value = Number(input.value) - 1;
            }
        }
    }

    return (
        <CartContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, handleQuantityInput, changeQuantityButtons }}>
            {children}
        </CartContext.Provider>
    )
}