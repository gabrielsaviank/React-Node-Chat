import { GET_MESSAGES } from "../types";

type ActionType = {
    type: string;
    payload: { id: string }
};

const INITIAL_STATE = {
    messages: []
};

export default (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case GET_MESSAGES:
            return { ...state, messages: action.payload };
        default:
            return state;
    }
};