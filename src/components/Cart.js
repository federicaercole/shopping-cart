import { Link } from "react-router-dom";
import { infoIcon } from "./icons";
import Button from "./Button";
import QuantityInput from "./QuantityInput";
import ErrorMessage from "./ErrorMessage";
import { useContext, useRef } from "react";
import { CartContext } from "./CartContext";
import { useValidateForm } from "./useValidateForm";

function Cart() {
    const { cart, setCart, cartQuantity, setCartQuantity, changeQuantityButtons, handleQuantityInput } = useContext(CartContext);
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);
    const totalPrice = cart.map((item, index) => cartQuantity[index] * item.price).reduce((prev, total) => prev + total, 0);
    const shippingFee = totalPrice >= 60 ? 0 : 8;
    const inputRefs = useRef([]);
    const { errorMessages, checkValidityOnBlur, checkValidityOnChange, isInvalid } = useValidateForm(cartQuantity.length);

    function setInputRefs(element, index) {
        inputRefs.current[index] = element;
    }

    function deleteItem(id) {
        const index = cart.findIndex((item) => item.url === id);
        setCartQuantity(cartQuantity.filter((item, i) => {
            return i !== index;
        }))
        setCart(cart.filter(item => item.url !== id));
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
                                        <img src={`/images/${item.images_small[0]}`} alt={`Cover of ${item.name}`} />
                                        <p className="price">{item.price}<span>€</span></p>
                                        <div className="quantity">
                                            <QuantityInput defaultValue={cartQuantity[index]} product={item}
                                                onBlur={(e) => { checkValidityOnBlur(inputRefs.current[index], item, index); handleQuantityInput(e, inputRefs.current[index], item) }}
                                                onChange={() => checkValidityOnChange(inputRefs.current[index], index)}
                                                handleButtons={(e) => { changeQuantityButtons(e, item.quantity, inputRefs.current[index]); checkValidityOnChange(inputRefs.current[index], index); handleQuantityInput(e, inputRefs.current[index], item) }}
                                                ref={(element) => setInputRefs(element, index)}
                                                isInvalid={isInvalid(index)} />
                                            <Button handle={() => deleteItem(item.url)}>Remove <span className="visually-hidden">{item.name} from cart</span></Button>
                                            <ErrorMessage message={errorMessages[index]} id={item.url} />
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