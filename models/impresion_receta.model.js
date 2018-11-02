'use strict'
module.exports = (sequelize, Sequelize) => {
    const ImpresionReceta = sequelize.define('impresion_recetas', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        fecha: {
            type: Sequelize.DATE
        },
        usuario_id: {
            type: Sequelize.BIGINT
        }
    });
    return ImpresionReceta;
}