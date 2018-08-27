var request = require('request');

class ApiController {
    async loadView(req, h) {

        return new Promise((resolve, reject) => {
            request.post({
                headers: { 'content-type': 'application/x-www-form-urlencoded; charset=utf-8' },
                url: 'https://www.google.com/recaptcha/api/siteverify',
                body: `response=${req.payload['g-recaptcha-response']}&secret=6LefwWwUAAAAAGNljmD2WPK9oh-YSb2OkKaLRzov`
            }, function (error, response, body) {
                console.log(body);
                return resolve(body);
            });
        });
    }
}

module.exports = ApiController;