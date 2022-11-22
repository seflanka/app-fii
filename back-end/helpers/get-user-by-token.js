const jwt = require('jsonwebtoken');
const userModels = require('../models/userModels')

// get usuario by jwt token

const getUserByToken = async (token) => {

    if(!token) {
        return res.status(401).json({message: 'Acesso negado!'});
    };

    const decoded = jwt.verify(token, 'nossosecret');
    
    const userId = decoded.id;

    const user = await userModels.findOne({_id: userId});

    return user;
}

module.exports = getUserByToken