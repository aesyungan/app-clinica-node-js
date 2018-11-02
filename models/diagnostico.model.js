'use strict'
module.exports = (sequelize, Sequelize) => {
    const Diagnostico = sequelize.define('diagnostico', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.TEXT
        }
    });
    return Diagnostico;
}