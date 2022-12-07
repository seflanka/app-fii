const dbCentralModels = require('../models/dbCentralModels');
const request = require('request-promise');
const cheerio = require('cheerio');
const Crawler = require('crawler');
const arrayFii = require('../db/arrayFii')

module.exports = class dbCentralContoller {
    static async updateAllFii(req, res) {
        const crawpgFilha = new Crawler({
            rateLimit: 5000,
            maxConnections: 1,
            callback: function(error, res, done){
                if(error){
                    console.log(error);
                }else{
                    var $ = res.$;
                    const codigo =  $('#fund-ticker').text().trim();
                    const administrador = $('#informations--admin > div.top-content > div.text-wrapper > span.administrator-name').text().trim();
                    const dataBase = $('#last-revenues--table > tbody > tr:nth-child(1) > td:nth-child(1)').text().trim();
                    const nomeFundo = $('#fund-name').text().trim(); 
                    const patrimonioLiq = $('#informations--indexes > td:nth-child(3) > h3.value').text().trim();
                    const cotacaoBase = $('#last-revenues--table > tbody > tr:nth-child(1) > td:nth-child(3)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.'); 
                    
                    const dataPagamento = $('#last-revenues--table > tbody > tr:nth-child(1) > td:nth-child(2)').text().trim();
                    const dataPagamento1 = $('#last-revenues--table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim(); 
                    const dataPagamento2 = $('#last-revenues--table > tbody > tr:nth-child(3) > td:nth-child(2)').text().trim(); 
                    const dataPagamento3 = $('#last-revenues--table > tbody > tr:nth-child(4) > td:nth-child(2)').text().trim(); 
                    const dataPagamento4 = $('#last-revenues--table > tbody > tr:nth-child(5) > td:nth-child(2)').text().trim(); 
                    const dataPagamento5 = $('#last-revenues--table > tbody > tr:nth-child(6) > td:nth-child(2)').text().trim(); 
                    const dataPagamento6 = $('#last-revenues--table > tbody > tr:nth-child(7) > td:nth-child(2)').text().trim(); 
                    const dataPagamento7 = $('#last-revenues--table > tbody > tr:nth-child(8) > td:nth-child(2)').text().trim(); 
                    const dataPagamento8 = $('#last-revenues--table > tbody > tr:nth-child(9) > td:nth-child(2)').text().trim(); 
                    const dataPagamento9 = $('#last-revenues--table > tbody > tr:nth-child(10) > td:nth-child(2)').text().trim();
                    
                    const dy = $('#last-revenues--table > tbody > tr:nth-child(1) > td:nth-child(4)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dy1 = $('#last-revenues--table > tbody > tr:nth-child(2) > td:nth-child(4)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dy2 = $('#last-revenues--table > tbody > tr:nth-child(3) > td:nth-child(4)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dy3 = $('#last-revenues--table > tbody > tr:nth-child(4) > td:nth-child(4)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dy4 = $('#last-revenues--table > tbody > tr:nth-child(5) > td:nth-child(4)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dy5 = $('#last-revenues--table > tbody > tr:nth-child(6) > td:nth-child(4)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dy6 = $('#last-revenues--table > tbody > tr:nth-child(7) > td:nth-child(4)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dy7 = $('#last-revenues--table > tbody > tr:nth-child(8) > td:nth-child(4)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dy8 = $('#last-revenues--table > tbody > tr:nth-child(9) > td:nth-child(4)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dy9 = $('#last-revenues--table > tbody > tr:nth-child(10) > td:nth-child(4)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    
                    const dividendo = $('#last-revenues--table > tbody > tr:nth-child(1) > td:nth-child(5)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dividendo1 = $('#last-revenues--table > tbody > tr:nth-child(2) > td:nth-child(5)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dividendo2 = $('#last-revenues--table > tbody > tr:nth-child(3) > td:nth-child(5)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dividendo3 = $('#last-revenues--table > tbody > tr:nth-child(4) > td:nth-child(5)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dividendo4 = $('#last-revenues--table > tbody > tr:nth-child(5) > td:nth-child(5)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dividendo5 = $('#last-revenues--table > tbody > tr:nth-child(6) > td:nth-child(5)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dividendo6 = $('#last-revenues--table > tbody > tr:nth-child(7) > td:nth-child(5)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dividendo7 = $('#last-revenues--table > tbody > tr:nth-child(8) > td:nth-child(5)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dividendo8 = $('#last-revenues--table > tbody > tr:nth-child(9) > td:nth-child(5)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');
                    const dividendo9 = $('#last-revenues--table > tbody > tr:nth-child(10) > td:nth-child(5)').text().trim().replace(/[^0-9,]/g,'').replace(/,/g, '.');

                    
                    const cadastroFii = new dbCentralModels({
                        codigo,
                        administrador,
                        dataBase,
                        nomeFundo,
                        patrimonioLiq,
                        cotacaoBase,
                        dataPagamento, 
                        dataPagamento1, 
                        dataPagamento2, 
                        dataPagamento3, 
                        dataPagamento4, 
                        dataPagamento5, 
                        dataPagamento6, 
                        dataPagamento7, 
                        dataPagamento8, 
                        dataPagamento9,
                        dy,
                        dy1,
                        dy2,
                        dy3,
                        dy4,
                        dy5,
                        dy6,
                        dy7,
                        dy8,
                        dy9,
                        dividendo,
                        dividendo1,
                        dividendo2,
                        dividendo3,
                        dividendo4,
                        dividendo5,
                        dividendo6,
                        dividendo7,
                        dividendo8,
                        dividendo9,
                        totalInvestido : '',
                        totalReceber : '',
                        diasParaReceber : '',
                        porcentagemCarteira : '',
                    });
                    
                    try {
                        cadastroFii.save();    
                    } catch (error) {
                        res.status(500).json({message: error});
                        return;
                    };
                };
                done();  
            }
        });
        crawpgFilha.queue(arrayFii);   
    }

    static async getAllFii(req, res) {
        const dbCentralFii = await dbCentralModels.find().sort('-createdAt');
        
        res.status(200).json({dbCentralFii: dbCentralFii});
        return;
    };

    static async getFiiByName(req, res) {

        const codigo  = req.params.codigo;
        
        const fii = await dbCentralModels.findOne({codigo: codigo});

        if (!fii) {
            res.status(404).json({message: 'Fii não encontrado!'});
            return;
        };

        res.status(200).json({
            fii: fii,
            
        });
        return;
    };
}