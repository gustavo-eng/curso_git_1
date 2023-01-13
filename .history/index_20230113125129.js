console.log('Ola mundo')

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/developer', (req, res) => {
    return res.json([
        {name: 'Gustavo'},
        {funcao: 'desenvolvedor'}
    ])
})