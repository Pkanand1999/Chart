const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const Database = require('./config/db');
const authRoute = require("./router/authRouter")
require('dotenv').config()
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan("dev"));
app.use('/api/v1/auth',authRoute)





// listining port 
const port=process.env.PORT
Database();
app.listen(port,()=>{
    console.log('listening on port',port);
});