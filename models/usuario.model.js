'use strict'
module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
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
        direccion: {
            type: Sequelize.STRING
        },
        fecha_facimiento: {
            type: Sequelize.DATE
        },
        genero: {
            type: Sequelize.BOOLEAN
        },
        estado: {
            type: Sequelize.BOOLEAN
        },
    }, {
            indexes: [{
                unique: true,
                fields: ['username']
            }, {
                unique: true,
                fields: ['correo']
            }]
        });
    return Usuario;
}