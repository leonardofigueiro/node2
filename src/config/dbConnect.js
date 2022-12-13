import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()
// mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://${process.env.USUARIO}:${process.env.PASWD}@cluster0.vzfl9sy.mongodb.net/alura-node`)

let db = mongoose.connection;

export default db;