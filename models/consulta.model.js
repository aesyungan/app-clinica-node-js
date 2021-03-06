'use strict'
module.exports = (sequelize, Sequelize) => {
    const Consulta = sequelize.define('consultas', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        motivo: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        emfermedad_actual: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        tratamiento_inicial: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        fecha_consulta: {
            type: Sequelize.DATE
        }
    });
    return Consulta;
}