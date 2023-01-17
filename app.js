const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const { conn } = require('./config/mongo')
const router = require('./routes/routes')
const cors = require('cors')

require('dotenv').config()
const app = express()
app.use(morgan('dev'))

// middleware
app.use(express.json())

//lista de control de acceso(origenes)
const whiteList = ['http://localhost:3000/api/post']
app.use(cors({ origin: whiteList }))

app.use('/api', router)

app.get('/', (req, res) => {
    res.redirect('api/user')
})


conn()
const port = process.env.port || 8000
app.listen(port, () => {

    try {
        console.log(colors.blue(`Server listening successfully on port http://localhost:${port}`))

    } catch (error) {
        console.log(colors.red('Failed to listen on server port:', error))
    }

})