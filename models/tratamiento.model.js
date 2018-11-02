'use strict'
module.exports = (sequelize, Sequelize) => {
    const Tratamiento = sequelize.define('tratamiento', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        advertencias: {
            type: Sequelize.STRING
        },
        fecha: {
            type: Sequelize.DATE
        },

        // fecha_fin: {
        //     type: Sequelize.DATE
        // }
    });
    return Tratamiento;
}