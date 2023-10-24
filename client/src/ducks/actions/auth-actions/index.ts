import Api from "../../../api/Api";
import history from "../../../history";
import {
    LOGIN,
    CREATE_USER,
    LOGOUT,
} from "../../types";

export const login = ({ username, password }: {
    username: string,
    password: string
}) => async (dispatch: ({ type, payload }: {
    type: string,
    payload: unknown }) => void) => {
    try {
        const response = await Api.post("/users/login", { username, password });
        localStorage.setItem("userId", response.data.token);

        dispatch({ type: LOGIN, payload: response.data });
        history.push("/home");
    } catch (err) {
        console.log("IXChat- ERROR: Couldn't establish connection with database");
    }
};

export const createUser = ({ username, name, password, admin, token }: {
    username: string,
    name: string,
    password: string,
    admin: boolean,
    token: string,
}) => async (dispatch: ({ type, payload }: {
    type: string,
    payload: unknown }) => void) => {
    try {
        const response = await Api.post("/users", {
            username,
            name,
            password,
            admin
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        dispatch({ type: CREATE_USER, payload: response.data });
        history.push("/home");
    } catch (err) {
        console.log("IXChat- ERROR: Couldn't establish connection with database");
    }
};

export const logout = () => async (dispatch: ({ type }: { type: string }) => void) => {
    localStorage.clear();
    return dispatch({ type: LOGOUT });
};
