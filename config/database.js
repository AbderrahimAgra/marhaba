const mongoose = require("mongoose");
const{ MONGO_URI } = process.env ;


exports.connect = ()=>{
    mongoose
        .connect(MONGO_URI,{
            useNewUrlParser : true,
            useUnifiedTopology: true,
            useCreateIndex : true ,
            useFindAndModify : false
        })
        .then(()=>{
            console.log("Successfully connected to database");
        })
        .catch((err)=>{
            console.log('database connecting failed. exiting now...');
            console.error(error);
            process.exit(1);
        })

   // mongosh "mongodb+srv://cluster0.i9ktl0g.mongodb.net/admin" --apiVersion 1 --username agra
}