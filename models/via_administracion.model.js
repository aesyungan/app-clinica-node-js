'use strict'
//1 via oral //2 via sublingual //3 via tópica 4//via transdérmica //5 via oftálmica //6via ótica //7via intranasal//8 inhalatoria //9 via recta //10 via vaginal 11 //via parental 
module.exports = (sequelize, Sequelize) => {
    const ViaAdministracion = sequelize.define('via_administracion', {
        id: {
            type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });
    return ViaAdministracion;
}