import { errorIcon } from "./icons";

function ErrorMessage({ message, quantity, id }) {

    if (message !== "") {
        return <p id={`error-${id}`} aria-live="polite" className="warning">{errorIcon} {message} {message === "Please write a quantity equal or less than" && quantity}</p>
    }
}

export default ErrorMessage;