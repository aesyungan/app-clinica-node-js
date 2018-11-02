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
db.Paciente = require('./paciente.model')(sequelize, Sequelize);
db.Consulta = require('./consulta.model')(sequelize, Sequelize);
db.Consulta.belongsTo(db.Paciente);
db.Consulta.belongsTo(db.Usuario);

db.ListadoAntecedente = require('./listado_antecedente.model')(sequelize, Sequelize);
db.AntecedentesPersonales = require('./antecedentes_personales.model')(sequelize, Sequelize);
db.AntecedentesPersonales.belongsTo(db.Paciente, {
  foreignKey: {
    primaryKey: true,
    allowNull: false
  }
});
db.AntecedentesPersonales.belongsTo(db.Paciente, {
  foreignKey: {
    primaryKey: true,
    allowNull: false
  }
});
module.exports = db;
