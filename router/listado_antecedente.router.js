const express = require('express');
const router = express.Router();
const db = require('../models/db');
const sms = require('../config/messages.config');
const HttpStatus = require('../config/http.status.config');
let ResponseData = require('../utils/ResponseData');
//optenerAll
router.get('/', (req, res) => {
    db.ListadoAntecedente.findAll().then(data => {
        res.status(HttpStatus.ok).send(new ResponseData(true, sms.List, sms.detailsList, data));
    }).catch(error => {
        res.status(HttpStatus.badRequest).send(new ResponseData(false, sms.List, error, null));
    });
});
//optener ID
router.get('/:id', (req, res) => {
    db.ListadoAntecedente.findByPk(
        req.params.id
    ).then(data => {
        res.status(HttpStatus.ok).send(new ResponseData(true, sms.Search, sms.detailsSearch, data));
    }).catch(error => {
        res.status(HttpStatus.badRequest).send(new ResponseData(false, sms.Search, error, null));
    });
});
//crear
router.post('/', (req, res) => {
    // console.log("test->");
    // console.log(req.body);
    db.ListadoAntecedente.create(req.body).then(data => {
        res.status(HttpStatus.ok).send(new ResponseData(true, sms.Insert, sms.detailsInsert, data));
    }).catch(error => {
        res.status(HttpStatus.badRequest).send(new ResponseData(false, sms.Insert, error, null));
    });
});
//actualizar
router.put('/', (req, res) => {
    // console.log("test->");
    // console.log(req.body);
    db.ListadoAntecedente.update(req.body, { where: { id: req.body.id } })
        .then(data => {
            if (data[0] == 1) {
                res.status(HttpStatus.ok).send(new ResponseData(true, sms.Update, sms.detailsUpdate, data[0]));
            } else {
                res.status(HttpStatus.badRequest).send(new ResponseData(false, sms.Update, sms.detailsUpdateError, data[0]));
            }
        }).catch(error => {
            res.status(HttpStatus.badRequest).send(new ResponseData(false, sms.Update, error, null));
        });
});
//eliminar
router.delete('/:id', (req, res) => {
    // console.log("test->");
    // console.log(req.body);
    req.params.id;
    db.ListadoAntecedente.destroy({
        where: {
            id: req.params.id //delete by id
        }
    }).then((data) => { // rowDeleted will return number of rows deleted
        res.status(HttpStatus.ok).send(new ResponseData(true, sms.Delete, sms.detailsDelete, data));
    }).catch(error => {
        res.status(HttpStatus.badRequest).send(new ResponseData(false, sms.Update, error, null));
    });
});

module.exports = router;