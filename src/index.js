// first of all we need to get the environment variables because in our project we are using environment variables different different places.

// require("dotenv").config({path: './env'});
import dotenv from 'dotenv';  // for consistency with module js

import connectToMongodb from "./db/dbConnect.js";

dotenv.config({
    path: './env'
})

connectToMongodb()















/*

     ---------- first way of connecting mongodb -------------- 

import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("Error", (error) => {
            console.log("Error: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App listening on ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.log("ERROR: " + error);
        throw error;
    }
})()

*/