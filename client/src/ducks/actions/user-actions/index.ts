import Api from "../../../api/Api";
import { GET_USERS } from "../../types";

export const getUsers = (token: string) => async (dispatch: ({ type, payload }: {
    type: string,
    payload: unknown }) => void) => {

    try {
        const response = await Api.get("/users", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(response);

        dispatch({ type: GET_USERS, payload: response.data.users });
    } catch (err) {
        console.log("IXChat- ERROR: Couldn't establish connection with database");
    }
};
