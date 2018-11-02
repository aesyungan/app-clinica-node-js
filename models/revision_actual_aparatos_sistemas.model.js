'use strict'
module.exports = (sequelize, Sequelize) => {
    const RevisionActualAparatosSistemas = sequelize.define('revision_actual_aparatos_sistemas', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        tipo: {
            type: Sequelize.INTEGER//1 aparato 2 /sistemas
        }
    });
    return RevisionActualAparatosSistemas;
}