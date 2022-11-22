const mongoose = require('../db/conn');
const { Schema } = mongoose;

const userModels = mongoose.model(
    'userModels',
    new Schema({
        userName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    }, 
    { timestamps: true }
    ),
)

module.exports = userModels