const { config } = require('dotenv');
const Sequelize = require('sequelize');

config();

// conexão com banco de dados
/*
const sequelize = new Sequelize('previsio_db', 'root', 'Previsio2022', {
  host: 'localhost',
  dialect: 'mysql'
});
*/
//conexão utilizando variáveis no .env
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: { 
        ssl: { // utilizar este parametro para conectar no PlanetScale. Estudar mais tarde
          rejectUnauthorized: false,
        }
    },
    dialectModule: require('mysql2') //necessário adicionar a dependencia aqui para deploy no Vercel
})

sequelize.authenticate()
.then(() => {
    console.log("Conexão com banco de dados realizada com sucesso!");
}).catch((err) => {
    console.log("Erro: conexão com banco de dados não realizada com sucesso!");
    console.log(err);
})

module.exports = sequelize;