'use strict'
module.exports = (sequelize, Sequelize) => {
    const Receta = sequelize.define('recetas', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        medicamento: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        cantidad: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        docis: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        frecuencia: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        duracion: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        recomendacion: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    });
    return Receta;
}