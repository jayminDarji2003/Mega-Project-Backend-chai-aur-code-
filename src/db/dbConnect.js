// in this file, we will connect to the mongodb database

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToMongodb = async () => {
    try {
        console.log("connecting to mongodb...");
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Mongodb connected successfully!!  DB Host: ${connectionInstance.connection.host}.`);
    }
    catch (error) {
        console.log("Error connecting to MongoDB");
        console.log(error);
        process.exit(1);
    }
}


export default connectToMongodb