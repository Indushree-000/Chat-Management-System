const mongoose = require("mongoose");
const Chat = require("./models/chat");
main()
.then(res => console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsaap');
}

let chats = [
    {
            from: "amit",
            to: "rita",
            msg: "Send me Maths Question Papers",
            created_at: new Date()
    },
        {
            from: "Harry",
            to: "Ron",
            msg: "I am a Wicked Wizard",
            created_at: new Date()
    },
        {
            from: "Ron",
            to: "Granger",
            msg: "Do You Love Potter?",
            created_at: new Date()
    },
        {
            from: "Harry",
            to: "Ron",
            msg: "Hermione, knows a plenty of magical lines!",
            created_at: new Date()
    },
        {
            from: "Draco",
            to: "Hermione",
            msg: "You are a mudblood , don't deserve to be here",
            created_at: new Date()
    },
        {
            from: "Hagrid",
            to: "Harry",
            msg: "Harry you are a born wizard and meant to be in Hogwarts School of Magic",
            created_at: new Date()
    },
];
Chat.insertMany(chats);