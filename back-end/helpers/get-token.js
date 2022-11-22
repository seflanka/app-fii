const getToken = (req) => {
      
    // seleciona o segundo elemento de um array:
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]

    return token
}

module.exports = getToken