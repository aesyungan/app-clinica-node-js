const jwt = require('jwt-simple');
const moment = require('moment');
const authConfig = require('../config/auth.config');
crearToken = (usuario) => {
    const payload = {
        user: usuario,
        iat: moment().unix(),//fecha creacion del token
        exp: moment().add(14, 'days').unix(), //caducidad del token es de 14 
    }
    return jwt.encode(payload, authConfig.SECRET_TOKEN);
}
//console.log(crearToken({ id: 12,nombre:'alex' }));
module.exports = crearToken;