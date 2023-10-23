import {
    GET_USERS,
} from "../types";

type ActionType = {
    type: string;
    payload: { id: string }
};

const INITIAL_STATE = {
    users: []
};

export default (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
};