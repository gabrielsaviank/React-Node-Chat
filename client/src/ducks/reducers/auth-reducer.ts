import {
    LOGIN,
    GET_USERS,
    LOGOUT,
    CREATE_USER
} from "../types";

type ActionType = {
    type: string;
    payload: { id: string }
};

const INITIAL_STATE = {
    userId: null,
    token: null,
    name: null,
    username: null,
    admin: null,
    isSignedIn: false,
};

export default (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case GET_USERS:
            return { error: action.payload };
        case LOGOUT:
            return { isSignedIn: null, userId: null };
        case CREATE_USER:
            return action.payload;
        default:
            return state;
    }
};