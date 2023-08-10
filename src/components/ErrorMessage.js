import { errorIcon } from "./icons";

function ErrorMessage({ message, id }) {

    if (message !== "") {
        return <p id={`error-${id}`} className="warning">{errorIcon} {message}</p>
    }
}

export default ErrorMessage;