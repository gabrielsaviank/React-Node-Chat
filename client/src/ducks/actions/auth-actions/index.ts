import Api from "../../../api/Api";
import history from "../../../history";
import {
    LOGIN,
    CREATE_USER,
    LOGOUT,
    GET_USERS
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
        // dispatch({ type: FAILED_LOGIN, payload: true });
        // setTimeout(
        //     () => {
        //         dispatch({ type: FAILED_LOGIN, payload: false });
        //     }, 1500);
        console.log("IXChat- ERROR: Couldn't establish connection with database");
    }
};