const express = require('express')
const app = express()
let dotenv = require('dotenv').config()
// console.log(dotenv);
const port = process.env.PORT;
const mongoose = require('mongoose');
const cors = require('cors');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error')

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());

const user = require('./routes/auth')

app.use("/api",user);

// error handler
app.use(errorHandler);



mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
})
.then(()=>{console.log("DB Connected");})
.catch((err)=>{console.log(err);})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})