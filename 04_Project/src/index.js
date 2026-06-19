// require('dotenv').config({path : './env'})
import dotenv from "dotenv";

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDB()

// Approch 1
/*
import express from "express";
const app = express()

// used iffe - to execute direclty
( async () => {
    try {
        await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)

            // when app(express) not able to connect to db
            app.on("error", (error) => {
                console.log("Not able to connect to db", error);
                throw error
            })

            app.listen(process.env.PORT, () =>{
                console.log(`App is listening on port ${process.env.PORT}`);
                
            })
    } catch (error) {
        console.error("ERROR", error);
        throw error;
    }
})()
*/