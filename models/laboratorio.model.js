'use strict'
module.exports = (sequelize, Sequelize) => {
    const Laboratorio = sequelize.define('laboratorio', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        fecha_registro: {
            type: Sequelize.DATE
        },
        fecha_entrega: {
            type: Sequelize.DATE
        },
        medico_que_solicita: {
            type: Sequelize.STRING
        },
        id_medico_que_solicita: {//solo si solicita un doc de ahi mismo si no es asi que ponga 0
            type: Sequelize.BIGINT
        },
        descripcion: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.INTEGER// 1 en proceso // 2 completado // 3 entregado // 4 cancelado
        }
    });
    return Laboratorio;
}