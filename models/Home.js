const Sequelize = require('sequelize');
const db = require('./db');

const Home = db.define('homes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    },
    text_one:{
        type: Sequelize.STRING,
        allownull: false
    },
    text_two: {
        type: Sequelize.STRING,
        allownull: false
    },
    text_three:{
        type: Sequelize.STRING,
        allownull: false
    },
    btn_title:{
        type: Sequelize.STRING,
        allownull: false
    },
    btn_link:{
        type: Sequelize.STRING,
        allownull: false
    }
});

//Cria a tabela do DB se não existe
//Home.sync();

//Realiza alterações na tabela conforme implementado
Home.sync({alter:true})

module.exports = Home;