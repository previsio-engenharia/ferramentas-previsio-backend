/* modelo não mais utilizado. Agora esta tabela está em um arquivo estático
nesta aplicação */
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

/*
CREATE TABLE `nr05_dimensionamento_cipas` (
	`id` int NOT NULL AUTO_INCREMENT,
	`grau_risco` int,
	`nro_trabalhadores_min` int,
	`nro_trabalhadores_max` int,
	`integrantes_efetivos` int,
	`integrantes_suplentes` int,
	`createdAt` datetime NOT NULL,
	`updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
  CHARSET utf8mb4,
  COLLATE utf8mb4_0900_ai_ci;
*/