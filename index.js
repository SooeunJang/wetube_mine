import express from "express"; // var express = require('express');
import logger from "morgan"; //don't care nickname
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

var app = express();

const PORT = 4000;
 
const handleListening = () => console.log(`listening on : http://localhost:${PORT}`);
// function handleListening()
// {
//     console.log("listening on : http://localhost:4000");
// }
const handleHome = (req, res) =>
{ 
    // console.log(req);
    res.send("hello from home");
}

const handleProfile = (req, res) => res.send("hello from handle profile"); //arrow function

// // middle ware 
// const betweenHome = (req, res, next) => 
// {
//     console.log('middle ware !! ');
//     next();
// }
// app.use(betweenHome);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(helmet());
app.use(logger("dev"));
// app.get("/", handleHome);
const middleware = (req, res, next) =>
{
    res.send(" preventing to send handler"); // when call send response at middleware like this, it is for prevent reaching to handler
}
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);

// app.get('/', function(req, res) {
//   res.send('hello world');
// });
