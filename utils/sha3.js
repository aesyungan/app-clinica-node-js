const sha3_512 = require('js-sha3').sha3_512;
module.exports = sha3 = (dataString) => {
    //cifra con sha3
    let data = sha3_512(dataString);
    return data;
}
