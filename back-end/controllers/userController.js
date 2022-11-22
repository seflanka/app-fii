const userModels = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Helpers
const createUserToken = require('../helpers/create-user-token');
const getToken = require('../helpers/get-token');
const getUserByToken = require('../helpers/get-user-by-token');


module.exports = class userController {

    ///////////////////// FUNÇÃO PARA CRIAR USUARIO //////////////////////////
    static async register(req, res) {
        const {userName, email, password} = req.body;

        if(!email) {
            res.status(422).json({message: 'O email é obrigatório!'});
            return;
        };

        if(!password) {
            res.status(422).json({message: 'A senha é obrigatória!'});
            return;
        };

        if(!userName) {
            res.status(422).json({message: ' O nome é obrigatório!'});
            return;
        };

        //Checando se o usuario já existe:
        const userExists = await userModels.findOne({email: email});

        if(userExists) {
            res.status(422).json({ message: 'Email já utilizado!'});
            return;
        };

        //Criando o password:
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        // Criando usuario
        const usuario = new userModels({
            userName,
            email,
            password: passwordHash,
        });

        try {
            const newUsuario = await usuario.save();
            await createUserToken(newUsuario, req, res);

        } catch (error) {
            res.status(500).json({message: error});
            return;
        };

    }

    ///////////////////// FUNÇÃO PARA LOGAR USUARIO //////////////////////////
    static async login(req, res) {
        
        const {email, password} = req.body;

        if(!email) {
            res.status(422).json({message: 'O email é Obrigatório!'});
            return;
        };

        if(!password) {
            res.status(422).json({message: 'A senha é obrigatória!'});
            return;
        };

        // Checar se o usuário já existe:
        const checkUser = await userModels.findOne({email: email});

        if(!checkUser) {
            res.status(422).json({message: 'Usuário não cadastrado com esse e-mail!'});
            return;
        };

        // checando se a senha
        const checkPassword = await bcrypt.compare(password, checkUser.password);

        if(!checkPassword) {
            res.status(422).json({message: 'Senha invalida!'});
            return;
        };


        await createUserToken(checkUser, req, res);
        return;
    };

    static async checkUser(req, res) {
        let currentUser

        if (req.headers.authorization) {
            
            const token = getToken(token)
            const decoded = jwt.verify(token, 'nossosecret')

            currentUser = await User.findById(decoded.id)

            currentUser.password = undefined

        } else {
            currentUser = null
        }

        res.status(200).send(currentUser)
    }

}