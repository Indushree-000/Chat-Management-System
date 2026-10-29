//This file is used to insert sample data into database usually multiple data by running "node init,js" cmd in terminal
const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        maxLength: 100
    },
    created_at: {
        type: Date,
        required: true
    },
    updated_at: {
        type: Date,
        required: true
    },

});

const Chat = mongoose.model("Chat" , chatSchema);
module.exports = Chat;