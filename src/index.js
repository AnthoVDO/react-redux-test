import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles/index.scss";


//redux

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers" //Here, I only point the folder and javascript will pick automaticly index.js

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) //used to use redux dev tool. Remove it while we have finished and that we want to put the site on air
)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>

, document.getElementById("root"));
