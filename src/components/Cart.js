function Cart({ cart, cartQuantity }) {
    const totalObj = cartQuantity.reduce((prev, total) => prev + total, 0);
    const totalPrice = cart.map((item, index) => cartQuantity[index] * item.price).reduce((prev, total) => prev + total, 0);

    return (
        <>
            <p>Number of articles: {totalObj}</p>
            {cart.map((item, index) => <p key={item.id}>{item.name} - Quantity {cartQuantity[index]} - Price {cartQuantity[index] * item.price}€</p>)}

            <p>Total: {totalPrice}€</p>
            {totalPrice > 0 && <button type="button">Checkout</button>}
        </>
    )
}

export default Cart;