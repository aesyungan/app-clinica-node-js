class ResponseData {

    constructor(status, title, message, data) {
        this.httpStatus = status;
        this.title = title;
        this.message = message;
        this.data = data;
    }
}
module.exports = ResponseData;