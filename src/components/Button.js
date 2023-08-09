function Button({ type = "button", className, handle, children }) {

    return (
        <button type={type} onClick={handle} className={className}>
            {children}
        </button>
    )
}

export default Button;