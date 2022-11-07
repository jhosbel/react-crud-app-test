const express = require('express')
const mongoose = require('mongoose')
const app = express()
const morgan = require('morgan')
require('dotenv').config()
const routerApi = require('./routes/routes.api')
const cors = require('cors')//esta mierda siempre tiene que ir


//Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api', routerApi)

//Routes
app.get('/', (req, res) => {res.send('Hello, Server runing perfect')});


//MongoDB Conecction
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log('Connected to  MongoDB Correct!')})
.catch((error) => console.error(error))
const port = process.env.PORT || 4000
app.listen(port, () => {console.log('Server NodeJs on Port', port)})