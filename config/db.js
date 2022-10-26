const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/marhaba")
    .then(()=>{
        console.log('db connected successfully')
    })
    .catch((err)=>{
        console.log(`error : ${error}`);
    })
