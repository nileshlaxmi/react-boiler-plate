import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from "redux-logger";
import freeze from 'redux-freeze';
import auth from './auth/reducer';

export const appReducer = combineReducers({
  auth,
});

// const loggerMiddleware = createLogger();

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

function configureStore(preloadedState) {
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') {
    // middlewares.push(loggerMiddleware, freeze);
    middlewares.push(freeze);
  }
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares, thunkMiddleware))
  );
}

export default configureStore();
