'use strict'
module.exports = (sequelize, Sequelize) => {
    const SignosVitales = sequelize.define('signos_vitales', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        fecha: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        presion_arterial: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        frec_cardiaca: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        pulso: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        frec_respiratoria: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        temperatura: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        peso: {
            type: Sequelize.FLOAT,
            allowNull: true,
        },
        talla: {
            type: Sequelize.FLOAT,
            allowNull: true,
        }

    });
    return SignosVitales;
}