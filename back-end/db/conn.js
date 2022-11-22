const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb+srv://root:1a2b3c4MTX25@appfundoimobiliario.bgx2arz.mongodb.net/?retryWrites=true&w=majority')
    // await mongoose.connect('mongodb://0.0.0.0:27017/fii')
    console.log('conectou ao mongoose')

}

main().catch((err) => console.log(err))

module.exports = mongoose 


