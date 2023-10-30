const express = require('express')
var cors = require('cors')
const path = require("path")
const dotenv = require("dotenv")

// necessário utilizar este dotenv.config e declarar qual é o arquivo .env utilizado
// no código utiliza-se: process.env.NOME_DA_VARIAVEL
dotenv.config({ path: "./.env" })

const app = express();

/*  indica a pasta onde serão guardados os arquivos publicos
    como css, js, e outros
    é preciso declarar usando app.use(express.static(diretorio))
 */
const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

/*
var corsOptions = {
    origin: /previsio\.com.br$/,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
*/

app.use(cors())

//Routes
//define as rotas utilizadas, neste caso direciona aos respectivos caminhos
app.use('/api', require('./app/routes/reportGenerationRoutes'))
//app.use('/company', require('./app/routes/company'))

// inicia o servidor na porta 5000
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log("Server started on port 5000")
})