'use strict'
module.exports = (sequelize, Sequelize) => {
    const Factura = sequelize.define('factura', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        fecha: {
            type: Sequelize.DATE
        },
        descuento: {
            type: Sequelize.FLOAT
        },
        importe_iva: {
            type: Sequelize.FLOAT
        },
        subtotal: {
            type: Sequelize.FLOAT
        },
        total: {
            type: Sequelize.FLOAT
        },
        forma_pago: {
            type: Sequelize.INTEGER//1 efectivo //2targeta
        },
        estado: {
            type: Sequelize.INTEGER//1 inicado //2 cancelado //completado o pagado
        }
    });
    return Factura;
}