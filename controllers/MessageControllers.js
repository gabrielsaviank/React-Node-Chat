import { Message } from "../models/Message.js";

export const getUserMessages = async(req, res) => {
    const { senderId, receiverId } = req.query;

    try {
        const messages = await Message.aggregate([
            {
                $match: {
                    $or: [
                        { sender: senderId, receiver: receiverId },
                        { sender: receiverId, receiver: senderId },
                    ],
                },
            },
            {
                $sort: { createdAt: 1 },
            },
        ]);

        res.status(200).send({ messages });
    } catch (err) {
        res.status(422).send("IXChat: Error - Request Failed.");
    }
};