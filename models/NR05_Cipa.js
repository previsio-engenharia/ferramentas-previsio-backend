const Sequelize = require('sequelize');
const db = require('./db');

const NR05_Cipa = db.define('nr05_dimensionamento_cipas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    },
    grau_risco:{
        type: Sequelize.INTEGER,
        allownull: false
    },
    nro_trabalhadores_min: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    nro_trabalhadores_max:{
        type: Sequelize.INTEGER,
        allownull: false
    },
    integrantes_efetivos:{
        type: Sequelize.INTEGER,
        allownull: false
    },
    integrantes_suplentes:{
        type: Sequelize.INTEGER,
        allownull: false
    }
});

//Cria a tabela do DB se não existe
NR05_Cipa.sync();

//Realiza alterações na tabela conforme implementado
//NR05_Cipa.sync({alter:true})

module.exports = NR05_Cipa;