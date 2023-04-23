import { cartIcon } from "./icons";

function Button({ text, className, handle, productName }) {

    return (
        <button type="button" onClick={handle} className={className}>
            {text === "Add to Cart" && cartIcon}
            {text}
            {text === "Remove" && <span className="visually-hidden">{productName} from cart</span>}
        </button>
    )
}

export default Button;