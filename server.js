require('dotenv').config()
const express = require('express');
const app = express();
const db = require('./config/db');
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors');
const Role = require('./models/Roles');

(async () => {
    if (await Role.count() === 0)
        await Role.insertMany([
            { role: 'manager' },
            { role: 'customer' },
            { role: 'delivery' }
        ]);
})();

// middlwares for handling or parsing incoming requests
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());


const port = process.env.PORT
const authRouter = require('./routes/auth')



app.use('/api/auth', authRouter)

app.use(errorHandler);

app.listen(port , (err)=>{
    !err ? console.log(`app running on port ${port}`) : console.log(err)
})





