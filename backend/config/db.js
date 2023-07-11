const mongoose = require('mongoose');

async function Database(){
    await mongoose.connect(process.env.MONGODB_DATABASE)
    .then(()=>{
     console.log('Database connected')
    }).catch(err => console.log(err));
 }
 
 module.exports = Database;