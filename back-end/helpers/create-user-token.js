const jwt = require('jsonwebtoken');
const cadastroFiiModels = require('../models/cadastroFiiModels')

const createUserToken = async ( user, req, res ) => {

    // create a token
    const token = jwt.sign({
        user: user.name,
        id: user._id
    }, "nossosecret")

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


    res.status(200).json({      
        message: 'Login efetuado com sucesso!',
        token: token,
        userId: user._id,
        cadastroFii, 
        totalInvestidoCarteira, 
        totalproventos
    });  
    return;


    // return token


  
}

module.exports = createUserToken 



