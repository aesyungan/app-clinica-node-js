'use strict'
module.exports = (sequelize, Sequelize) => {
    const MetodoComplementarios = sequelize.define('metodo_complementario', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });
    return MetodoComplementarios;
}