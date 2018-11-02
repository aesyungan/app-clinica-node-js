'use strict'
module.exports = (sequelize, Sequelize) => {
    const Paciente = sequelize.define('paciente', {
        id_paciente: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        nombres: {
            type: Sequelize.STRING
        },
        apellidos: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        fecha_facimiento: {
            type: Sequelize.DATE
        },
        edad: {
            type: Sequelize.STRING
        },
        ocupacion: {
            type: Sequelize.INTEGER
        },
        direccion: {
            type: Sequelize.STRING
        },
    });
    return Paciente;
}