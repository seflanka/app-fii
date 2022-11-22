const mongoose = require('../db/conn');
const { Schema } = mongoose;

const fiiModels = mongoose.model(
    'cadastroFiiModels',
    new Schema({
        codigo: {
            type: String,
        },
        administrador: {
            type: String,
        },
        dataBase: {
            type: String,
        },
        nomeFundo: {
            type: String,
        },
        patrimonioLiq: {
            type: String,
        },
        cotacaoBase: {
            type: Number,
        },
        quantidade: {
            type: Number,
        },
        dataPagamento: {
            type: String,
        },
        dataPagamento1: {
            type: String,
        },
        dataPagamento2: {
            type: String,
        },
        dataPagamento3: {
            type: String,
        },
        dataPagamento4: {
            type: String,
        },
        dataPagamento5: {
            type: String,
        },
        dataPagamento6: {
            type: String,
        },
        dataPagamento7: {
            type: String,
        },
        dataPagamento8: {
            type: String,
        },
        dataPagamento9: {
            type: String,
        },
        dy: {
            type: Number,
        },
        dy1: {
            type: Number,
        },
        dy2: {
            type: Number,
        },
        dy3: {
            type: Number,
        },
        dy4: {
            type: Number,
        },
        dy5: {
            type: Number,
        },
        dy6: {
            type: Number,
        },
        dy7: {
            type: Number,
        },
        dy8: {
            type: Number,
        },
        dy9: {
            type: Number,
        },
        dividendo: {
            type: Number,
        },
        dividendo1: {
            type: Number,
        },
        dividendo2: {
            type: Number,
        },
        dividendo3: {
            type: Number,
        },
        dividendo4: {
            type: Number,
        },
        dividendo5: {
            type: Number,
        },
        dividendo6: {
            type: Number,
        },
        dividendo7: {
            type: Number,
        },
        dividendo8: {
            type: Number,
        },
        dividendo9: {
            type: Number,
        },
        totalCarteira: {
            type: Number,
        },
        totalInvestido: {
            type: Number,
        },
        totalReceber: {
            type: Number,
        },
        diasParaReceber: {
            type: String,
        },
        porcentagemCarteira: {
            type: Number,
        },
        user:  Object,
    },
    { timestamps: true },
    )
);

module.exports = fiiModels