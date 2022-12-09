const Sequelize = require('sequelize');
const db = require('./db');

const NR04_Sesmt = db.define('nr04_dimensionamento_sesmts', {
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
    tecnico_seg:{
        type: Sequelize.STRING,
        allownull: false
    },
    engenheiro_seg:{
        type: Sequelize.STRING,
        allownull: false
    },
    aux_tec_enfermagem:{
        type: Sequelize.STRING,
        allownull: false
    },
    enfermeiro:{
        type: Sequelize.STRING,
        allownull: false
    },
    medico:{
        type: Sequelize.STRING,
        allownull: false
    }
});

//Cria a tabela do DB se não existe
NR04_Sesmt.sync();

//Realiza alterações na tabela conforme implementado
//NR04_Sesmt.sync({alter:true})

module.exports = NR04_Sesmt;