'use strict'
module.exports = (sequelize, Sequelize) => {
    const AntecedentesPersonales = sequelize.define('antecedentes_personales', {
        tipo: {
            type: Sequelize.INTEGER
        },
        descripcion: {
            type: Sequelize.STRING
        },
        tipo_antecedente: {
            type: Sequelize.INTEGER
        }
    });
    return AntecedentesPersonales;
}