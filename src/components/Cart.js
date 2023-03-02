import { Fragment, useState } from "react";
import ErrorMessage from "./ErrorMessage";

function Cart({ cart, setCart, cartQuantity, setCartQuantity, message, changeQuantity, checkInput }) {
    const [currentItem, setCurrentItem] = useState("");
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);
    const totalPrice = cart.map((item, index) => cartQuantity[index] * item.price).reduce((prev, total) => prev + total, 0);
    const shippingFee = totalPrice > 60 ? 0 : 8;

    function handleChange(e, id) {
        if (!e.target.checkValidity() || e.target.value === "") {
            e.preventDefault();
        } else {
            const index = cart.findIndex((item) => item.id === id);
            const newQuantity = cartQuantity.map((item, i) => {
                if (i === index) {
                    return Number(e.target.value);
                } else {
                    return item;
                }
            });
            setCartQuantity(newQuantity);
        }
    }

    function deleteItem(id) {
        const index = cart.findIndex((item) => item.id === id);
        setCartQuantity(cartQuantity.filter((item, i) => {
            return i !== index;
        }))
        setCart(cart.filter(item => item.id !== id));
    }

    return (
        <> {totalObj === 0 ? <p>Your cart is empty</p> :
            <>
                <p>Number of articles: {totalObj}</p>
                <ErrorMessage message={message} quantity={currentItem.quantity} />
                {cart.map((item, index) =>
                    <Fragment key={item.id}>
                        <p>{item.name} - <label htmlFor={item.id}>Quantity</label>
                            <input type="number" id={item.id} defaultValue={cartQuantity[index]} min="1" max={item.quantity} step="1" onChange={(e) => { setCurrentItem(item); checkInput(e); handleChange(e, item.id) }} required />
                            <button type="button" value="plus" onClick={(e) => changeQuantity(e, item.quantity, `#${item.id}`)}>+</button>
                            <button type="button" value="minus" onClick={(e) => changeQuantity(e, item.quantity, `#${item.id}`)}>-</button>
                            <button type="button" onClick={() => deleteItem(item.id)}>Delete</button>
                            - Price {cartQuantity[index] * item.price}€</p>
                    </Fragment>)}
                <p>{shippingFee === 0 ? "Free shipping" : "Shipping fee: " + shippingFee + "€"}</p>
                <p>Total: {totalPrice + shippingFee}€</p>
                <button type="button">Checkout</button>
            </>
        }
        </>
    )
}

export default Cart;