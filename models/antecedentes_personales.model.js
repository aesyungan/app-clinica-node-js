'use strict'
module.exports = (sequelize, Sequelize) => {
    const AntecedentesPersonales = sequelize.define('antecedentes_personales', {
        descripcion: {
            type: Sequelize.STRING
        },
        tipo_antecedente: {
            type: Sequelize.INTEGER//1 familiar 2 personal
        }
    });
    AntecedentesPersonales.removeAttribute('id');//eliminamos el id que se crea autmaticamente ya que este tendra id los 2 foreign key 
    return AntecedentesPersonales;
}