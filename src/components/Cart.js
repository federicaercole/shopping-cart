import { Link } from "react-router-dom";
import { infoIcon } from "./icons";
import Button from "./Button";
import QuantityInput from "./QuantityInput";
import ErrorMessage from "./ErrorMessage";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

function Cart() {
    const { cart, setCart, cartQuantity, setCartQuantity, changeQuantityButtons, handleQuantityInput } = useContext(CartContext);
    const [messages, setMessages] = useState(Array(cartQuantity.length).fill(""));
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);
    const totalPrice = cart.map((item, index) => cartQuantity[index] * item.price).reduce((prev, total) => prev + total, 0);
    const shippingFee = totalPrice >= 60 ? 0 : 8;

    function deleteItem(id) {
        const index = cart.findIndex((item) => item.url === id);
        setCartQuantity(cartQuantity.filter((item, i) => {
            return i !== index;
        }))
        setCart(cart.filter(item => item.url !== id));
    }

    function checkValidityOnBlur(target, index) {
        const input = document.querySelector(`#${target.url}`);
        if (!input.validity.valid) {
            input.setAttribute("aria-invalid", "true");
            const errorMessages = messages.map((message, i) => {
                if (i === index) {
                    if (input.validity.rangeUnderflow) {
                        return "You must have at least a quantity of 1";
                    } else if (input.validity.valueMissing || input.validity.badInput || input.validity.stepMismatch) {
                        return "You must write a valid number";
                    } else if (input.validity.rangeOverflow) {
                        return `Please write a quantity equal or less than ${target.quantity}`;
                    }
                }
                return message;
            });
            setMessages(errorMessages);
        }
    }

    function checkValidityOnChange(target, index) {
        const input = document.querySelector(`#${target}`);
        if (input.validity.valid) {
            input.setAttribute("aria-invalid", "false");
            const errorMessages = messages.map((message, i) => {
                if (i === index) {
                    return "";
                }
                return message;
            });
            setMessages(errorMessages);
        }
    }

    return (
        <main>
            {totalObj !== 0 && <h1>Cart</h1>}
            {totalObj === 0 ? <><h1 className="empty">Your cart is empty</h1><Link to="/">Start shopping!</Link></> :
                <>
                    <div className="cart-checkout">
                        <div>
                            {cart.map((item, index) =>
                                <article className="cartProduct" key={item.url}>
                                    <h2>{item.name}</h2>
                                    <div>
                                        <img src={`${process.env.REACT_APP_IMG_FOLDER}${item.images_small[0]}`} alt={`Cover of ${item.name}`} />
                                        <p className="price">{item.price}<span>€</span></p>
                                        <div className="quantity">
                                            <QuantityInput input={`${item.url}`} defaultValue={cartQuantity[index]} product={item}
                                                onBlur={(e) => { checkValidityOnBlur(item, index); handleQuantityInput(e, `${item.url}`, item) }}
                                                onChange={() => checkValidityOnChange(`${item.url}`, index)}
                                                handleButtons={(e) => { changeQuantityButtons(e, item.quantity, `${item.url}`); checkValidityOnChange(`${item.url}`, index); handleQuantityInput(e, `${item.url}`, item) }} />
                                            <Button handle={() => deleteItem(item.url)}>Remove <span className="visually-hidden">{item.name} from cart</span></Button>
                                            <ErrorMessage message={messages[index]} id={item.url} />
                                        </div>
                                    </div>
                                </article>)}
                        </div>
                        <div className="checkout">
                            {shippingFee !== 0 && totalObj !== 0 && <p className="warning">{infoIcon}You are {60 - totalPrice}€ away for free shipping!</p>}
                            <p>Number of articles: {totalObj}</p>
                            <p>{shippingFee === 0 ? "Free shipping" : "Shipping fee: " + shippingFee + "€"}</p>
                            <p className="price">Total: {totalPrice + shippingFee}<span>€</span></p>
                            <Button>Checkout</Button>
                        </div>
                    </div>
                </>
            }
        </main >
    )
}

export default Cart;