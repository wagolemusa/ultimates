import cors from 'cors';
import express from "express";
import consola from  'consola';
import mongoose from "mongoose";
import passport from "passport";
import { json } from "body-parser";

import { DB, PORT } from './constants';


// import Routers

import UserApis from './apis/user';


// import passport middleware
require("./middlewares/passport-middleware")

// Initialalize express application
const app = express();


// Application Middlewares
app.use(cors());
app.use(json());
app.use(passport.initialize());

// inject sub routes and  apis
app.use("/users", UserApis);


const main = async () => {
    try {
        // Connect with the database
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        consola.success("DATABASE CONNECTED...");
        // Start application listening  for request on server

        app.listen(PORT, () => consola.success(`Server started on port ${PORT}`));
    }catch(error){
        consola.log(`Unbale to start the servr \n${error.message}`)
    }
}

main();