import {
  logInService,
} from "../../services/auth.service";
import { errHandler } from "../../services";
import { toast } from "react-toastify";

const MODULE_NAME = "[AUTH]";

export const ActionTypes = {
  LOG_IN: `${MODULE_NAME} LOG_IN`,
  LOG_IN_ERROR: `${MODULE_NAME} LOG_IN ERROR`,
  LOG_IN_SUCCESS: `${MODULE_NAME} LOG_IN SUCCESS`,
};

export const login = (payload) => (dispatch) => {
  dispatch({ type: ActionTypes.LOG_IN });
  return logInService(payload)
    .then((response) => {
      dispatch({
        type: ActionTypes.LOG_IN_SUCCESS,
        payload: response,
      });
      return response;
    })

    .catch((error) => {
      dispatch({
        type: ActionTypes.LOG_IN_ERROR,
        payload: error,
      });
      toast.error(errHandler(error));
    });
};