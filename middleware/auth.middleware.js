//se ecarga de verificar si los tokens son correctos
const jwt = require('jwt-simple');
const moment = require('moment');
const authConfig = require('../config/auth.config');
const HttpStatus = require('../config/http.status.config');
const sms = require('../config/messages.config');
let ResponseData = require('../utils/ResponseData');
isAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(HttpStatus.Forbidden).send(new ResponseData(true, sms.Access, sms.detailsForbidden, null));
    }
    try {
        let token = req.headers.authorization.split(" ")[1];//combierte la cavecera en array y el token es el 1 
        let payload = jwt.decode(token, authConfig.SECRET_TOKEN);
        console.log("token");
        console.log(payload);
        if (payload.exp < moment.unix()) {
            return res.status(HttpStatus.Unauthorized).send(new ResponseData(true, sms.Access, sms.detailsTokenExpired, null));
        }
        req.user = payload.user;
    } catch (error) {
        return res.status(HttpStatus.Unauthorized).send(new ResponseData(true, sms.Access, sms.detailsTokenInvalid, null));
    }
    next();
}

module.exports = isAuth;