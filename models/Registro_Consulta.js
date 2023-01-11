const Sequelize = require('sequelize');
const db = require('./db');

const Registro_Consulta = db.define('registro_consultas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
    },
    tipo:{
        type: Sequelize.STRING(100),
        allownull: false
    },
    status:{
        type: Sequelize.STRING(100),
        allownull: false
    },
    cnpj:{
        type: Sequelize.STRING(100)
    },
    cnae1:{
        type: Sequelize.STRING(100)
    },
    cnae2:{
        type: Sequelize.STRING(100)
    },
    nro_trabalhadores:{
        type: Sequelize.INTEGER,
        allownull: false
    },
    email: {
        type: Sequelize.STRING(100)
    }
});

//Cria a tabela do DB se não existe
Registro_Consulta.sync();

//Realiza alterações na tabela conforme implementado
//Registro_Consulta.sync({alter:true})

module.exports = Registro_Consulta;


/*
CREATE TABLE `registro_consultas` (
	`id` int NOT NULL AUTO_INCREMENT,
	`tipo` varchar(100),
	`status` varchar(100),
	`cnpj` varchar(100),
	`cnae1` varchar(100),
	`cnae2` varchar(100),
	`nro_trabalhadores` int,
	`email` varchar(100),
	`createdAt` datetime NOT NULL,
	`updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE InnoDB,
  CHARSET utf8mb4,
  COLLATE utf8mb4_0900_ai_ci;
*/