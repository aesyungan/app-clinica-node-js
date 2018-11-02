'use strict'
module.exports = (sequelize, Sequelize) => {
    const DiseñoFactura = sequelize.define('diseño_factura', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        cedula: {
            type: Sequelize.STRING
        },
        ruc: {
            type: Sequelize.STRING
        },
        obligado_contabilidad: {
            type: Sequelize.BOOLEAN
        }
    });
    return DiseñoFactura;
}