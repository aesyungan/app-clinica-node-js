'use strict'
module.exports = (sequelize, Sequelize) => {
    const Cita = sequelize.define('citas', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        doctor_id: {
            type: Sequelize.BIGINT,//quien registro la cita //debe ser un usuario mismo 
            allowNull: true,
        },
        fecha_registro: {
            type: Sequelize.DATE
        },
        fecha_cita: {
            type: Sequelize.DATE
        },
        observacion: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        estado: {
            type: Sequelize.INTEGER//1 agendado //2 atendido //3 cancelado 
        },
    });
    return Cita;
}