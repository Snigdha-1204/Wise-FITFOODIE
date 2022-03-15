//import express module
var express = require("express");
//import body-parser module
var bodyparser = require("body-parser");

let cors = require("cors");

//create the rest object
let app=express();
//enable ports communication
//set the JSON as MIME type
app.use(bodyparser.json());
//read the JSON
app.use(bodyparser.urlencoded({extended:false}));

app.use(cors());

app.use("/register",require("./register/register"));
//use fetch module
app.use("/fetch",require("./fetch/fetch"));
app.use("/delete",require("./delete/delete"));
app.use("/login",require("./login/login"));
//assign the port no
app.listen(3000);
console.log("server listening the port no.3000");