//logear
const express = require('express');
const router = express.Router();
const db = require('../models/db');
const sms = require('../config/messages.config');
const HttpStatus = require('../config/http.status.config');
const ResponseData = require('../utils/ResponseData');
const sha3 = require('../utils/sha3');
const tokenUtil = require('../utils/token.util');
//logear
router.get('/sign-in/:username/:password', (req, res) => {
    let password = sha3(req.params.password);
    db.Usuario.findOne({
        where: {
            username: req.params.username,
            password: password
        }
    }).then(data => {

        if (data != null) {
            if (data.estado != null && data.estado == true) {
                let resData = tokenUtil(data);
                res.status(HttpStatus.ok).send(new ResponseData(true, sms.Authentication, sms.detailsAuthentication, resData));
            } else {
                res.status(HttpStatus.ok).send(new ResponseData(false, sms.Authentication, sms.detailsAuthenticationNoActive, data));
            }
        } else {
            res.status(HttpStatus.badRequest).send(new ResponseData(false, sms.Authentication, sms.detailsAuthenticationError, data));
        }

    }).catch(error => {
        res.status(HttpStatus.badRequest).send(new ResponseData(false, sms.Authentication, error, null));
    });
});
//registro
//sign-Up
module.exports = router;