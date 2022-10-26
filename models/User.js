const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 255,
        min: 4
    },
    email: {
        type: String,
        required: true,
        max: 255    
    },
    password: {
        type: String,
        required: true,
        max: 1024    
    },  
    register_date: {
        type: Date,
        default: Date.now
    },
    emailIsValid: {
        type: Boolean,
        default: false
    },
    role: [{
        type: mongoose.Types.ObjectId,
        ref: 'roles'
    }]
})

module.exports = mongoose.model('User', userSchema)