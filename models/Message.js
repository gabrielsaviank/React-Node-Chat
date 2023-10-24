import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    sender: String,
    receiver: String,
    text: String,
    senderName: String,
    timestamp: { type: Date, default: Date.now }
});

export const Message = model("Message", messageSchema);