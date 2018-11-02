'use strict'
module.exports = (sequelize, Sequelize) => {
    const Iva = sequelize.define('iva', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        porcentaje: {
            type: Sequelize.FLOAT
        },
        estado: {
            type: Sequelize.BOOLEAN
        }
    });
    return Iva;
}