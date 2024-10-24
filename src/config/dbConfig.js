import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function connectDb(){
    
    try {
       await mongoose.connect(DB_URL);
       console.log(`Connected to database`);
    } catch (error) {
        console.log("Error while connected to database",error);
    }
}