import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import userReducer from "./user.reducer";

export default combineReducers({ //allow us to use multiple reducers
    postReducer,
    userReducer
})