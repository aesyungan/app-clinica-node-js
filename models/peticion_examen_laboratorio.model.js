'use strict'
module.exports = (sequelize, Sequelize) => {
    const PeticionExamenLaboratorio = sequelize.define('peticion_examen_laboratorio', {
        estado: {
            type: Sequelize.BOOLEAN //true completado //false en proceso
        },
    });
    PeticionExamenLaboratorio.removeAttribute('id');//eliminamos el id que se crea autmaticamente ya que este tendra id los 2 foreign key 
    return PeticionExamenLaboratorio;
}