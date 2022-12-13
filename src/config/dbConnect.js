import mongoose from "mongoose";

// mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://leofigueiro:1234@cluster0.vzfl9sy.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;