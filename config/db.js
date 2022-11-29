const mongoose = require('mongoose');
mongoose.connect("mongodb://mongoadmin:password@mongo:27017/marhaba?authSource=admin")
 // mongoose.connect("mongodb://localhost:27017/marhaba")
    .then(()=>{
        console.log('db connected successfully')
    })
    .catch((err)=>{
        console.log(`error : ${err}`);
    })
