console.log('Ola mundo')

const express = require('express')
const app = express()
const cors = require('cors')

const  port = 3000
app.use(cors())

app.get('/developer', (req, res) => {
    return res.json([
        {name: 'Gustavo'},
        {funcao: 'desenvolvedor'}
    ])
})

app.get('/search', (req, res) => {
    return res.json([{
        profile: 'dev',
        numero: String
    }])
})

app.listen(port, () => {
    console.log(`rodando na port ${port}`)
})