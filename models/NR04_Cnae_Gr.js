const Sequelize = require('sequelize');
const db = require('./db');

const NR04_Cnae_Gr = db.define('nr04_relacao_cnae_grs', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    },
    codigo_cnae:{
        type: Sequelize.STRING,
        allownull: false
    },
    denominacao: {
        type: Sequelize.STRING,
        allownull: false
    },
    grau_risco:{
        type: Sequelize.STRING,
        allownull: false
    }
});

//Cria a tabela do DB se não existe
NR04_Cnae_Gr.sync();

//Realiza alterações na tabela conforme implementado
//NR04_Cnae_Gr.sync({alter:true})

module.exports = NR04_Cnae_Gr;

/*
CREATE TABLE `nr04_relacao_cnae_grs` (
	`id` int NOT NULL AUTO_INCREMENT,
	`codigo_cnae` varchar(255),
	`denominacao` varchar(255),
	`grau_risco` varchar(255),
	`createdAt` datetime NOT NULL,
	`updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
  CHARSET utf8mb4,
  COLLATE utf8mb4_0900_ai_ci;
*/