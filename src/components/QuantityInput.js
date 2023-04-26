import { minusIcon, plusIcon } from "./icons";

function QuantityInput({ product, input, defaultValue, onBlur, onChange, handleButtons }) {

    return (
        <>
            <label htmlFor={input}>Quantity:</label>
            <input type="number" id={input} defaultValue={defaultValue} min="1" max={product.quantity} step="1" onChange={onChange} onBlur={onBlur} aria-invalid="false" aria-describedby={`error-${product.id}`} required />
            <button type="button" value="plus" onClick={handleButtons}>{plusIcon}<span className="visually-hidden">Add 1 unit of {product.name}</span></button>
            <button type="button" value="minus" onClick={handleButtons}>{minusIcon}<span className="visually-hidden">Remove 1 unit of {product.name}</span></button>
        </>
    )
}

export default QuantityInput;