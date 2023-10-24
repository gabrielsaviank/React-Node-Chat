import { combineReducers } from "redux";

import authReducer from "./auth-reducer";
import userReducer from "./user-reducer";
import messageReducer from "./message-reducer";

export default combineReducers({
    auth: authReducer,
    users: userReducer,
    messages: messageReducer
});