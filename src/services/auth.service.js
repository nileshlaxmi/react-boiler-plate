import axios from "axios";
import { successHandler, errorHandler } from ".";
import endpoint from "./endpoint";

export const logInService = (payload) => {
  return axios
    .post(endpoint.logIn(), payload)
    .then((response) => {
      return successHandler(response).then(({ result }) => {
        return result;
      });
    })
    .catch((error) => {
      return errorHandler(error);
    });
};