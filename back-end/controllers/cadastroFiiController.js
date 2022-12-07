const dbCentralModels = require('../models/dbCentralModels');
const cadastroFiiModels = require('../models/cadastroFiiModels');

//helpers
const getToken = require('../helpers/get-token');
const getUserByToken = require('../helpers/get-user-by-token');
const ObjectId = require('mongoose').Types.ObjectId;




module.exports = class cadastroFiiController{
    static async createFii( req, res ) {
        const  { codigo, quantidade } = req.body;

        const fii = await dbCentralModels.findOne({codigo: codigo});

        if (!fii) {
            res.status(404).json({message: 'Fii não encontrado!'});
            return;
        };
        if (!quantidade) {
            res.status(404).json({message: 'Insira a quantidade de cotas!'});
            return;
        };

        const token = getToken(req);

        const user =  await getUserByToken(token);
        
        const cadastroFii =  new cadastroFiiModels({
            codigo: codigo || '',
            administrador: fii.administrador || '',
            dataBase: fii.dataBase || '',
            nomeFundo: fii.nomeFundo || '',
            patrimonioLiq: fii.patrimonioLiq || '',
            cotacaoBase: fii.cotacaoBase || '',
            quantidade: quantidade || '',
            dataPagamento: fii.dataPagamento || '', 
            dataPagamento1: fii.dataPagamento1 || '', 
            dataPagamento2: fii.dataPagamento2 || '', 
            dataPagamento3: fii.dataPagamento3 || '', 
            dataPagamento4: fii.dataPagamento4 || '', 
            dataPagamento5: fii.dataPagamento5 || '', 
            dataPagamento6: fii.dataPagamento6 || '', 
            dataPagamento7: fii.dataPagamento7 || '', 
            dataPagamento8: fii.dataPagamento8 || '', 
            dataPagamento9: fii.dataPagamento9 || '',
            dy: fii.dy || '',
            dy1: fii.dy1 || '',
            dy2: fii.dy2 || '',
            dy3: fii.dy3 || '',
            dy4: fii.dy4 || '',
            dy5: fii.dy5 || '',
            dy6: fii.dy6 || '',
            dy7: fii.dy7 || '',
            dy8: fii.dy8 || '',
            dy9: fii.dy9 || '',
            dividendo: fii.dividendo || '',
            dividendo1: fii.dividendo1 || '',
            dividendo2: fii.dividendo2 || '',
            dividendo3: fii.dividendo3 || '',
            dividendo4: fii.dividendo4 || '',
            dividendo5: fii.dividendo5 || '',
            dividendo6: fii.dividendo6 || '',
            dividendo7: fii.dividendo7 || '',
            dividendo8: fii.dividendo8 || '',
            dividendo9: fii.dividendo9 || '',
            totalInvestido : '',
            totalReceber : '',
            diasParaReceber : '',
            porcentagemCarteira : '',
            user: {
                _id: user._id,
                userName: user.userName,
                email: user.email,
            },            
        });



        try {
            const newCadastro = await cadastroFii.save();
            await res.status(201).json({
                message: 'Cadatro realizado com sucesso!',
                newCadastro,                
            });
        } catch (err) {
            res.status(500).json({message: `${err}, 'Erro ao cadastrar'`});
        };
    };

    static async getAllFii(req, res) {
        const token = getToken(req);

        const  user =  await getUserByToken(token);
        const hoje = new Date();
        
        // Pega os dados no mongooDB
        const cadastroFii = await cadastroFiiModels.find({ 'user._id': user._id });
        const quantidadeFundos = cadastroFii.length;


        // Faz um loop dentro array e cadastra os valores que faltam
        for (var i = 0; i < quantidadeFundos; i++) {
            cadastroFii[i].totalInvestido = (cadastroFii[i].quantidade * cadastroFii[i].cotacaoBase).toFixed([2]);
            cadastroFii[i].totalReceber = (cadastroFii[i].quantidade * cadastroFii[i].dividendo).toFixed([2]);
            
            if ((cadastroFii[i].dataPagamento.substring(0,2)) <= hoje.getDate()) {
                cadastroFii[i].diasParaReceber = "Recebido";
            }else {
                cadastroFii[i].diasParaReceber = ((cadastroFii[i].dataPagamento.substring(0,2)) - hoje.getDate()) + ' Dias';
            };
        };


        //INICIO---------------------------------------------------------------------------------------------------------------
        // Entra dentro de cada item do array de objetos pega o valor e escreve dentro da var arrayLength que esta zerada:
        const arrayLength1 = [];
        for( var i = 0; i < quantidadeFundos; i++) {
            arrayLength1.unshift(cadastroFii[i].totalInvestido);
        };   

        //Usa a função reduce para somar os itens que estão dentro do array e fixa o numero de casas depois da virgula em 2:
        const totalInvestidoCarteira = arrayLength1.reduce(function(acumulador, value) {
            return acumulador + value
        },0).toFixed([2]);
        //FINAL---------------------------------------------------------------------------------------------------------------



        //INICIO---------------------------------------------------------------------------------------------------------------
        // Entra dentro de cada item do array de objetos pega o valor e escreve dentro da var arrayLength que esta zerada:
        const arrayLength2 = [];
        for( var i = 0; i < quantidadeFundos; i++) {
            arrayLength2.unshift(cadastroFii[i].totalReceber);
        };   

        //Usa a função reduce para somar os itens que estão dentro do array e fixa o numero de casas depois da virgula em 2:
        const totalproventos = arrayLength2.reduce(function(acumulador, value) {
            return acumulador + value
        },0).toFixed([2]);
        //FINAL---------------------------------------------------------------------------------------------------------------

        res.status(200).json({ cadastroFii, totalInvestidoCarteira, totalproventos });
        return;
    };

    static async remove(req, res ) {
        const id = req.params.id;

        // Chegando se o id é invalido 
        if(!ObjectId.isValid(id)) {
            res.status(422).json({ message: 'Id inválido' });
            return;
        };

        // Chacando se o cadastro existe
        const cadastroFii = await cadastroFiiModels.findOne({ _id: id });
        
        if (!cadastroFii) {
            res.status(404).json({ message: 'Cadastro não encontrado' });
            return;
        };

        //Chegando se o usuário logado é dono do lanche
        const token = getToken(req);
        const user = await getUserByToken(token);

        if(cadastroFii.user._id.toString()  !== user._id.toString() ) {
            res.status(422).json({ message: 
                'Houve um problema ao relaizar a solicitação' 
            });
            return;
        };

        await cadastroFiiModels.findByIdAndRemove(id);

        res.status(200).json({ message: 'Cadastro removido com sucesso!'});
        return;
    };

    static async getfii(req, res) {
        const id = req.params.id;
        
        if(!ObjectId.isValid(id)) {
            res.status(422).json({ message: 'Id inválido' });
            return;
        };

        // Pegando o fundo pelo ID
        const fii = await cadastroFiiModels.findOne({ _id: id });

        if(!fii) {
            res.status(404).json({ message: 'Fii não encontrado' });
            return;
        };

        res.status(200).json({ 
            fii: fii,
        });
        
    };

    static async getCodigos(req, res) {
        const codigos = require('../db/arrayCodigos')

        res.status(200).json({
            codigos : codigos
        })

    }
};