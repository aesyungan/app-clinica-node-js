'use strict'
module.exports = (sequelize, Sequelize) => {
    const ListadoExamenFisico = sequelize.define('listado_examen_fisico', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        codigo: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        nombre: {
            type: Sequelize.STRING
        }
    });
    return ListadoExamenFisico;
}