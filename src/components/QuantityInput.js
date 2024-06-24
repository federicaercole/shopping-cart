import { forwardRef } from "react";
import { minusIcon, plusIcon } from "./icons";

const QuantityInput = forwardRef(function QuantityInput({ product, defaultValue, onBlur, onChange, handleButtons, isInvalid }, ref) {

    return (
        <>
            <label htmlFor={`${product.url}`}>Quantity:</label>
            <input type="number" ref={ref} id={`${product.url}`} defaultValue={defaultValue ?? 1} min="1" max={product.quantity} step="1" onChange={onChange} onBlur={onBlur} aria-invalid={isInvalid} aria-describedby={`error-${product.url}`}
                disabled={!product.quantity} required />
            <button type="button" value="plus" onClick={handleButtons} disabled={!product.quantity}>{plusIcon}<span className="visually-hidden">Add 1 unit of {product.name}</span></button>
            <button type="button" value="minus" onClick={handleButtons} disabled={!product.quantity}>{minusIcon}<span className="visually-hidden">Remove 1 unit of {product.name}</span></button>
        </>
    )
});

export default QuantityInput;