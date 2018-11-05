const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const db = require('./models/db');
const bodyParser = require('body-parser');
const isAuth = require('./middleware/auth.middleware');
app.use(require("./middleware/cors.middleware"));
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
});
//config ruta modular 
app.use("/auth", require('./router/auth.router'));
app.use("/rol", isAuth, require('./router/rol.router'));
app.use("/usuario", isAuth, require('./router/usuario.router'));
app.use("/paciente", isAuth, require('./router/paciente.router'));
app.use("/consulta", isAuth, require('./router/consulta.router'));
app.use("/listado_antecedente", isAuth, require('./router/listado_antecedente.router'));
app.use("/antecedentes_personales", isAuth, require('./router/antecedentes_personales.router'));
app.use("/iva", isAuth, require('./router/iva.router'));
app.use("/factura", isAuth, require('./router/factura.router'));
app.use("/detalle_factura", isAuth, require('./router/detalle_factura.router'));
app.use("/tratamiento", isAuth, require('./router/tratamiento.router'));
app.use("/via_administracion", isAuth, require('./router/via_administracion.router'));
app.use("/receta", isAuth, require('./router/receta.router'));
app.use("/impresion_receta", isAuth, require('./router/impresion_receta.router'));
app.use("/cita", isAuth, require('./router/cita.router'));
app.use("/diagnostico", isAuth, require('./router/diagnostico.router'));
app.use("/metodo_complementarios", isAuth, require('./router/metodo_complementarios.router'));
app.use("/revision_actual_aparatos_sistemas", isAuth, require('./router/revision_actual_aparatos_sistemas.router'));
app.use("/listado_examen_fisico", isAuth, require('./router/listado_examen_fisico.router'));
app.use("/examen_fisico", isAuth, require('./router/examen_fisico.router'));
app.use("/signos_vitales", isAuth, require('./router/signos_vitales.router'));
app.use("/laboratorio", isAuth, require('./router/laboratorio.router'));
app.use("/tipo_examen_laboratorio", isAuth, require('./router/tipo_examen_laboratorio.router'));
app.use("/examen_laboratorio", isAuth, require('./router/examen_laboratorio.router'));
app.use("/peticion_examen_laboratorio", isAuth, require('./router/peticion_examen_laboratorio.router'));
app.use("/diseño_factura", isAuth, require('./router/diseño_factura.router'));
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
