'use strict'
module.exports = (sequelize, Sequelize) => {
    const Paciente = sequelize.define('paciente', {
        id: {
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
        celular: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        fecha_registro: {
            type: Sequelize.DATE
        },
        fecha_facimiento: {
            type: Sequelize.DATE
        },
        religion: {
            type: Sequelize.INTEGER
        },
        estado_civil: {
            type: Sequelize.INTEGER
        },
        ocupacion: {
            type: Sequelize.INTEGER
        },
        instruccion: {
            type: Sequelize.INTEGER
        },
        sexo: {
            type: Sequelize.BOOLEAN
        },
        direccion: {
            type: Sequelize.STRING
        },
        domicilio: {
            type: Sequelize.STRING
        },
        recidencia_ocacional: {
            type: Sequelize.STRING
        },
    });
    return Paciente;
}