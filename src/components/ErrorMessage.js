import { errorIcon } from "./icons";

function ErrorMessage({ message, quantity, id }) {

    if (message !== "") {
        return <p id={`error-${id}`} className="warning">{errorIcon} {message} {message === "Please write a quantity equal or less than" && quantity}</p>
    }
}

export default ErrorMessage;