function Button({ type = "button", className, handle, innerRef, disabled, children }) {

    return (
        <button type={type} onClick={handle} className={className} ref={innerRef} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;