'use strict'
module.exports = (sequelize, Sequelize) => {
    const TipoExamenLaboratorio = sequelize.define('tipo_examen_laboratorio', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });
    return TipoExamenLaboratorio;
}