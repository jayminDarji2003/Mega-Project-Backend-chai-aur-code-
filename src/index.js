// first of all we need to get the environment variables because in our project we are using environment variables different different places.

// require("dotenv").config({path: './env'});
import dotenv from 'dotenv';  // for consistency with module js

import connectToMongodb from "./db/dbConnect.js";
import { app } from './app.js';

dotenv.config({
    path: './env'
})

connectToMongodb()
    .then(() => {
        app.on("Error", (error) => {
            console.log("Error: ", error);
            throw error;
        })

        app.listen(process.env.PORT || 9000, () => {
            console.log(`Server is started on port : ${process.env.PORT}`);
            console.log(`Go to http://localhost:${process.env.PORT}`);
        })

        app.get('/', (req, res) => {
            res.send("Welcome to the server!!!")
        })
    })
    .catch((error) => {
        console.log("Couldn't connect to MongoDB!! \n", error);
    })















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