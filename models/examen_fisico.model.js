'use strict'
module.exports = (sequelize, Sequelize) => {
    const ExamenFisico = sequelize.define('examen_fisico', {
        cp: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        sp: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        fecha: {
            type: Sequelize.DATE,
            allowNull: true,
        }
    });
    ExamenFisico.removeAttribute('id');//eliminamos el id que se crea autmaticamente ya que este tendra id los 2 foreign key 
    return ExamenFisico;
}