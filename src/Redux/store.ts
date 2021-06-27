import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import Reducers from "./Reducers";

export const makeStore = (initialState: {}) => {
    return createStore(
        Reducers,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
};
