const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require("dotenv").config();
const cors = require('cors');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser'); 

let Port = process.env.PORT||3000;

app.use(bodyParser.json());
app.use(morgan());
app.use(cookieParser());
app.use(cors());


const user = require('./routes/user.js');
app.use('/api',user);

let Database = process.env.DATABASE;
// 
// db  server connect -> mongodbAtlas connect 
mongoose
.connect(Database)
.then(function () {
    console.log("connected");
})
.catch(function (err) {
    console.log("error", err);
})


app.get('/',(req,res)=>{
    res.send("Hello localhost 3000/");
})

app.listen(Port,()=>{
    console.log(`Listening on port ${Port}`);
})