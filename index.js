import express from "express";
import consola from  'consola';
import mongoose from "mongoose";
import passport from "passport";
import { json } from "body-parser";
import cors from 'cors'
import { DB, PORT } from './constants';
const path = require("path")





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
// app.use(express.static(path.join(__dirname,"./ultimate/build","index.html")))
// app.use(express.static(path.join(__dirname, 'build')));

// const publicPath = path.join(__dirname, '..', 'public');
// app.use(express.static(publicPath));
app.use(express.static('ultimate/build'));


// let port = process.env.PORT || 5000;

const main = async () => {
    try {
        // Connect with the database 
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log("DATABASE CONNECTED...");
        // Start application listening  for request on server

    
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    }catch(error){
        console.log(`Unbale to start the servr \n${error.message}`)
    }
}

main();

// app.get("*",(req, res) =>{
//     res.sendFile(path.join(__dirname,"./ultimate/build/index.html"))
//   })
// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
//  });

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname+'/ultimate/build/index.html'));
});