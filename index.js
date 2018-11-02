const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const db = require('./models/db');
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
});
//config ruta modular 
app.use("/rol", require('./router/rol.router'));
app.use("/usuario", require('./router/usuario.router'));
app.use("/paciente", require('./router/paciente.router'));
app.use("/consulta", require('./router/consulta.router'));
app.use("/listado_antecedente", require('./router/listado_antecedente.router'));
app.use("/antecedentes_personales", require('./router/antecedentes_personales.router'));
app.use("/iva", require('./router/iva.router'));
app.use("/factura", require('./router/factura.router'));
app.use("/detalle_factura", require('./router/detalle_factura.router'));
app.use("/tratamiento", require('./router/tratamiento.router'));
app.use("/via_administracion", require('./router/via_administracion.router'));
app.use("/receta", require('./router/receta.router'));
app.use("/impresion_receta", require('./router/impresion_receta.router'));
app.use("/cita", require('./router/cita.router'));
app.use("/diagnostico", require('./router/diagnostico.router'));
app.use("/metodo_complementarios", require('./router/metodo_complementarios.router'));
app.use("/revision_actual_aparatos_sistemas", require('./router/revision_actual_aparatos_sistemas.router'));
app.use("/listado_examen_fisico", require('./router/listado_examen_fisico.router'));
app.use("/examen_fisico", require('./router/examen_fisico.router'));
app.use("/signos_vitales", require('./router/signos_vitales.router'));
app.use("/laboratorio", require('./router/laboratorio.router'));
app.use("/tipo_examen_laboratorio", require('./router/tipo_examen_laboratorio.router'));
app.use("/examen_laboratorio", require('./router/examen_laboratorio.router'));
app.use("/peticion_examen_laboratorio", require('./router/peticion_examen_laboratorio.router'));
app.use("/diseño_factura", require('./router/diseño_factura.router'));
/*paginacion de usuarios */
app.get('/rolPage/:page/:size', (req, res) => {
    console.log('get roles');
    let limit = req.params.size;   // number of records per page
    let offset = 0;
    //console.log(req.params.size);
    db.Rol.findAndCountAll()
        .then((data) => {
            let page = req.params.page;      // page number
            let pages = Math.ceil(data.count / limit);
            offset = limit * (page - 1);
            db.Rol.findAll({

                limit: limit,
                offset: offset,
                $sort: { id_rol: 1 }
            })
                .then((users) => {
                    res.status(200).json({ 'result': users, 'count': data.count, 'pages': pages });
                });
        })
        .catch(function (error) {
            res.status(500).send('Internal Server Error');
        });

});
//elimina la base y crea de nuevo { force: true }
// db.sequelize.sync({ force: true }).then(() => {
//si existe la tabla ya no crea asi los datos guardaos se mantienen
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
});
