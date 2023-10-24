import Api from "../../../api/Api";
import { GET_MESSAGES } from "../../types";


type GetMessagesActionType = {
    userToken: string;
    senderId: string;
    receiverId: string;
}
export const getMessages = ({ userToken, senderId, receiverId }: GetMessagesActionType) => async (dispatch: ({ type, payload }: {
    type: string,
    payload: unknown }) => void) => {

    try {
        const response = await Api.get(
            `/messages?senderId=${senderId}&receiverId=${receiverId}`, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });

        dispatch({ type: GET_MESSAGES, payload: response.data.messages });
    } catch (err) {
        console.log("IXChat- ERROR: Couldn't establish connection with database");
    }
};
