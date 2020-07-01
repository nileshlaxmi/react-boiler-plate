import errorMessages from "../../constants/error";
import { constants, validateRequired, validateMaxLength } from "./common";

export const defaultValidation = {
  username: (value) => {
    if (!validateRequired(value)) {
      return errorMessages.blank("Username");
    }
    if (!validateMaxLength(value, 26)) {
      return errorMessages.maxLengthReached("Length of Username", 25);
    }
  },
  password: (value) => {
    if (!validateRequired(value)) {
      return errorMessages.blank("Password");
    }
    if (!validateMaxLength(value, 26)) {
      return errorMessages.maxLengthReached("Length of Password", 25);
    }
  },
  price: (value) => {
    let _value = Number(value);
    if (!validateRequired(_value)) {
      return errorMessages.blank("Price");
    }
    if (_value < 0) {
      return errorMessages.priceNotValid("Price");
    }
    if (_value && _value.length > 0) {
      if (!constants.numeric.test(_value)) {
        return errorMessages.numberNotValid("Price");
      }
      if (!validateMaxLength(_value, 10)) {
        return errorMessages.maxLengthReached("Price", 9);
      }
    }
  },
  
};
