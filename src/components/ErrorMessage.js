import { errorIcon } from "./icons";

function ErrorMessage({ message, quantity }) {

    if (message !== "") {
        return <p className="warning">{errorIcon} {message} {message === "Please write a quantity equal or less than" && quantity}</p>
    }
}


export default ErrorMessage;