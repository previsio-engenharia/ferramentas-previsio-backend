const Sequelize = require('sequelize');
const db = require('./db');

const MsgContact = db.define('msgs_contact', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allownull: false
    },
    email: {
        type: Sequelize.STRING,
        allownull: false
    },
    subject:{
        type: Sequelize.STRING,
        allownull: false
    },
    content:{
        type: Sequelize.TEXT,
        allownull: false
    }
});

//Cria a tabela do DB se não existe
//MsgContact.sync();

//Realiza alterações na tabela conforme implementado
MsgContact.sync({alter:true})

module.exports = MsgContact;