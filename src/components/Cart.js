import { Link } from "react-router-dom";

function Cart({ cart, setCart, cartQuantity, setCartQuantity, changeQuantity }) {
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);
    const totalPrice = cart.map((item, index) => cartQuantity[index] * item.price).reduce((prev, total) => prev + total, 0);
    const shippingFee = totalPrice >= 60 ? 0 : 8;

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
        <main>
            <h1>Cart</h1>
            {shippingFee !== 0 && totalObj !== 0 && <p>You are {60 - totalPrice}€ away for free shipping!</p>}
            {totalObj === 0 ? <p>Your cart is empty. <Link to="/">Start shopping!</Link></p> :
                <>
                    {cart.map((item, index) =>
                        <article className="cartProduct" key={item.id}>
                            <h2>{item.name}</h2>
                            <div>
                                <img src={item.images[0]} alt="" />
                                <p className="price">{item.price}€</p>
                            </div>
                            <div className="quantity">
                                <label htmlFor={item.id}>Quantity:</label>
                                <input type="number" id={item.id} defaultValue={cartQuantity[index]} min="1" max={item.quantity} step="1" onChange={(e) => { e.target.reportValidity(); handleChange(e, item.id) }} required />
                                <button type="button" value="plus" onClick={(e) => changeQuantity(e, item.quantity, `#${item.id}`)}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">

                                    <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
                                </svg><span className="visually-hidden">Add 1 to quantity</span></button>
                                <button type="button" value="minus" onClick={(e) => changeQuantity(e, item.quantity, `#${item.id}`)}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                                    <path d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"></path>
                                </svg><span className="visually-hidden">Remove 1 to quantity</span></button>
                                <button type="button" onClick={() => deleteItem(item.id)}><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                                    <path d="M30 24.398l-8.406-8.398 8.406-8.398-5.602-5.602-8.398 8.402-8.402-8.402-5.598 5.602 8.398 8.398-8.398 8.398 5.598 5.602 8.402-8.402 8.398 8.402z"></path>
                                </svg> Delete</button>
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