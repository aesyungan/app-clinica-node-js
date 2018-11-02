'use strict'
module.exports = (sequelize, Sequelize) => {
    const Consulta = sequelize.define('consulta', {
        id_consulta: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        motivo: {
            type: Sequelize.STRING
        },
        emfermedad_actual: {
            type: Sequelize.STRING
        },
        fecha_consulta: {
            type: Sequelize.DATE
        }
    });
    return Consulta;
}