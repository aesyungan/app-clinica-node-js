const Sequelize = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
  define: {
    underscored: true,
    timestamps: false
  }
});
let db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//rol
// db.Rol = sequelize.define('rol', {
//   id_rol: {
//     type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
//   },
//   nombre: {
//     type: Sequelize.STRING
//   },
//   descripcion: {
//     type: Sequelize.STRING
//   }
// });
// //usuario
// db.Usuario = sequelize.define('usuario', {
//   id_usuario: {
//     type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true
//   },
//   username: {
//     type: Sequelize.STRING
//   },
//   password: {
//     type: Sequelize.STRING
//   },
//   edad: {
//     type: Sequelize.INTEGER
//   }
// });
db.Rol = require('./rol.model')(sequelize, Sequelize);
db.Usuario = require('./usuario.model')(sequelize, Sequelize);
//relaciones de n to 1
db.Usuario.belongsTo(db.Rol);
//paciente
db.Paciente = require('./paciente.model')(sequelize, Sequelize);
//consulta
db.Consulta = require('./consulta.model')(sequelize, Sequelize);
db.Consulta.belongsTo(db.Paciente);
db.Consulta.belongsTo(db.Usuario);

db.ListadoAntecedente = require('./listado_antecedente.model')(sequelize, Sequelize);
//de n to n
db.AntecedentesPersonales = require('./antecedentes_personales.model')(sequelize, Sequelize);
db.AntecedentesPersonales.belongsTo(db.Paciente, {
  foreignKey: {
    primaryKey: true,
    allowNull: false
  }
});
db.AntecedentesPersonales.belongsTo(db.ListadoAntecedente, {
  foreignKey: {
    primaryKey: true,
    allowNull: false
  }
});
//n to n end
db.DiseñoFactura = require('./diseño_factura.model')(sequelize, Sequelize);
db.DiseñoFactura.belongsTo(db.Usuario);
db.Usuario.hasOne(db.DiseñoFactura);
//iva
db.Iva = require('./iva.model')(sequelize, Sequelize);
//factura
db.Factura = require('./factura.model')(sequelize, Sequelize);
db.Factura.belongsTo(db.Usuario);
db.Factura.belongsTo(db.Iva)//se aplicara la iva activo
//detalle factura
db.DetalleFactura = require('./detalle_factura.model')(sequelize, Sequelize);
db.DetalleFactura.belongsTo(db.Factura);
db.Factura.hasMany(db.DetalleFactura);
//tratamiento
db.Tratamiento = require('./tratamiento.model')(sequelize, Sequelize);
db.Tratamiento.belongsTo(db.Consulta);
//via administracion
db.ViaAdministracion = require('./via_administracion.model')(sequelize, Sequelize);
//receta
db.Receta = require('./receta.model')(sequelize, Sequelize);
db.Receta.belongsTo(db.Tratamiento);
db.Tratamiento.hasMany(db.Receta);
//impresion
db.ImpresionReceta = require('./impresion_receta.model')(sequelize, Sequelize);
db.ImpresionReceta.belongsTo(db.Receta);
//cita
db.Cita = require('./cita.model')(sequelize, Sequelize);
db.Cita.belongsTo(db.Usuario);
db.Cita.belongsTo(db.Paciente);
//diagnostico
db.Diagnostico = require('./diagnostico.model')(sequelize, Sequelize);
db.Diagnostico.belongsTo(db.Consulta);
//metodos complementarios
db.MetodoComplementarios = require('./metodos_complementarios_solicitados.model')(sequelize, Sequelize);
db.MetodoComplementarios.belongsTo(db.Consulta);
//revision actual aparatos y sistema
db.RevisionActualAparatosSistemas = require('./revision_actual_aparatos_sistemas.model')(sequelize, Sequelize);
db.RevisionActualAparatosSistemas.belongsTo(db.Consulta);
//listado examen fisico
db.ListadoExamenFisico = require('./listado_examen_fisico.model')(sequelize, Sequelize);
//examen fisico
db.ExamenFisico = require('./examen_fisico.model')(sequelize, Sequelize);
db.ExamenFisico.belongsTo(db.Consulta, {
  foreignKey: {
    primaryKey: true,
    allowNull: false
  }
});
db.ExamenFisico.belongsTo(db.ListadoExamenFisico, {
  foreignKey: {
    primaryKey: true,
    allowNull: false
  }
});
//signos vitales
db.SignosVitales = require('./signos_vitales.model')(sequelize, Sequelize);
db.SignosVitales.belongsTo(db.Consulta);
//laboratorio
db.Laboratorio = require('./laboratorio.model')(sequelize, Sequelize);
db.Laboratorio.belongsTo(db.Paciente);
//tipo de examenes laboratorio
db.TipoExamenLaboratorio = require('./tipo_examen_laboratorio.model')(sequelize, Sequelize);
//examenes laboratorio
db.ExamenLaboratorio = require('./examen_laboratorio.model')(sequelize, Sequelize);
db.ExamenLaboratorio.belongsTo(db.TipoExamenLaboratorio);
//peticion examen laboratorio
db.PeticionExamenLaboratorio = require('./peticion_examen_laboratorio.model')(sequelize, Sequelize);
db.PeticionExamenLaboratorio.belongsTo(db.Laboratorio, {
  foreignKey: {
    primaryKey: true,
    allowNull: false
  }
});
db.PeticionExamenLaboratorio.belongsTo(db.ExamenLaboratorio, {
  foreignKey: {
    primaryKey: true,
    allowNull: false
  }
});
module.exports = db;
