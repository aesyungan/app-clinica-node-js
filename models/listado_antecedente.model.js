'use strict'
module.exports = (sequelize, Sequelize) => {
    const ListadoAntecedente = sequelize.define('listado_antecedente', {
        id_listado_antecedente: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });
    return ListadoAntecedente;
}