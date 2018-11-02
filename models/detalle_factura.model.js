'use strict'
module.exports = (sequelize, Sequelize) => {
    const DetalleFactura = sequelize.define('detalle_factura', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        cantidad: {
            type: Sequelize.INTEGER
        },
        subtotal: {
            type: Sequelize.FLOAT
        },
        pvp_unitario: {
            type: Sequelize.FLOAT
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });
    return DetalleFactura;
}