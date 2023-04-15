import { Link } from "react-router-dom";
import Button from "./Button";
import QuantityInput from "./QuantityInput";

function Cart({ cart, setCart, cartQuantity, setCartQuantity, changeQuantity, handleQuantityInput }) {
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);
    const totalPrice = cart.map((item, index) => cartQuantity[index] * item.price).reduce((prev, total) => prev + total, 0);
    const shippingFee = totalPrice >= 60 ? 0 : 8;

    function deleteItem(id) {
        const index = cart.findIndex((item) => item.id === id);
        setCartQuantity(cartQuantity.filter((item, i) => {
            return i !== index;
        }))
        setCart(cart.filter(item => item.id !== id));
    }

    return (
        <main>
            {totalObj !== 0 && <h1>Cart</h1>}
            {shippingFee !== 0 && totalObj !== 0 && <p>You are {60 - totalPrice}€ away for free shipping!</p>}
            {totalObj === 0 ? <><h1 className="empty">Your cart is empty</h1> <Link to="/">Start shopping!</Link></> :
                <>
                    {cart.map((item, index) =>
                        <article className="cartProduct" key={item.id}>
                            <h2>{item.name}</h2>
                            <div>
                                <img src={item.images[0]} alt="" />
                                <p className="price">{item.price}€</p>
                                <div className="quantity">
                                    <QuantityInput input={`${item.id}`} defaultValue={cartQuantity[index]} product={item} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}
                                        handleInput={(e) => { e.target.reportValidity(); handleQuantityInput(e, `${item.id}`, item) }}
                                        handleButtons={(e) => { changeQuantity(e, item.quantity, `${item.id}`); handleQuantityInput(e, `${item.id}`, item) }} />
                                    <Button handle={() => deleteItem(item.id)} text="Delete" />
                                </div>
                            </div>
                        </article>)}
                    <p>Number of articles: {totalObj}</p>
                    <p>{shippingFee === 0 ? "Free shipping" : "Shipping fee: " + shippingFee + "€"}</p>
                    <p>Total: {totalPrice + shippingFee}€</p>
                    <button type="button">Checkout</button>
                </>
            }
        </main >
    )
}

export default Cart;