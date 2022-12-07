const express = require('express');
const cors = require('cors');


const app = express()


app.use(express.json())


// app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))
app.use(cors({ credentials: true, origin: 'http://ec2-54-208-72-108.compute-1.amazonaws.com:3000'}))


app.use(express.static('public'));

//Routes
const userRoutes = require('./routes/userRoutes');
const cadastroFiiRoutes = require('./routes/cadastroFiiRoutes')
const dbCentralRoutes = require('./routes/dbCentralRoutes')




app.use('/dbcentral', dbCentralRoutes)
app.use('/user', userRoutes)
app.use('/cadastro', cadastroFiiRoutes)

app.listen(5000);