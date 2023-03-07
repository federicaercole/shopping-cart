import { cartIcon } from "./icons";

function Button({ text, className, handle }) {

    return (
        <button type="button" onClick={handle} className={className}>
            {text === "Add to Cart" && cartIcon}
            {text}</button>
    )
}

export default Button;