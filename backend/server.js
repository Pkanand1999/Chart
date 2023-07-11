const express=require('express');
const cors=require('cors');
const morgan=require('morgan');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan("dev"));




// listining port 
const port=process.env.PORT

app.listen(port,()=>{
    console.log('listening on port',port);
});