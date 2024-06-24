import { useState } from "react";

export function useValidateForm(cartLength) {
    const [errorMessage, setErrorMessage] = useState("");
    const [errorMessages, setErrorMessages] = useState(Array(cartLength).fill(""));

    function isInvalid(index) {
        if ((index !== undefined && errorMessages[index]) || errorMessage) {
            return true;
        }
        return false;
    }

    function checkValidityOnBlur(input, product, index) {
        let error;
        if (!input.validity.valid) {
            if (input.validity.rangeUnderflow) {
                error = "You must have at least a quantity of 1";
            } else if (input.validity.valueMissing || input.validity.badInput || input.validity.stepMismatch) {
                error = "You must write a valid number";
            } else if (input.validity.rangeOverflow) {
                error = `Please write a quantity equal or less than ${product.quantity}`;
            }
            if (index !== undefined) {
                const arrayOfMessages = errorMessages.map((message, i) => {
                    if (i === index) {
                        return error;
                    }
                    return message;
                });
                return setErrorMessages(arrayOfMessages);
            }
            return setErrorMessage(error);
        }
    }

    function checkValidityOnChange(input, index) {
        if (input.validity.valid) {
            setErrorMessage("");
            if (index !== undefined) {
                const arrayOfMessages = errorMessages.map((message, i) => {
                    if (i === index) {
                        return "";
                    }
                    return message;
                })
                setErrorMessages(arrayOfMessages);
            }
        }
    }

    return { errorMessage, errorMessages, checkValidityOnBlur, checkValidityOnChange, isInvalid };
}