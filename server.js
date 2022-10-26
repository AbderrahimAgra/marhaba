require('dotenv').config()
const express = require('express');
const app = express();
const db = require('./config/db');
const errorHandler = require('./middlewares/errorHandler')
// middlwares for handling or parsing incoming requests
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



const port = process.env.PORT
const authRouter = require('./routes/auth')



app.use('/api/auth', authRouter)

app.use(errorHandler);

app.listen(port , (err)=>{
    !err ? console.log(`app running on port ${port}`) : console.log(err)
})





