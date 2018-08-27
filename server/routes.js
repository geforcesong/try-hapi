const GeoController = require('../controllers/geoController');
const ApiController = require('../controllers/apiController');

class RouteManager{
    constructor(server){
        this.server = server;
    }

    register(){
        this.registerOne('GET', '/', GeoController);
        this.registerOne('GET', '/about', GeoController, 'loadAbout');
        this.registerOne('POST', '/api/rechapcha/validate', ApiController);
    }

    registerOne(method, path, Controller, view = 'loadView') {
        this.server.route({
            method: method,
            path: path,
            handler: bindController(Controller, view)
        });
    }
}

module.exports = RouteManager;

function bindController(Controller, view) {
    return function (request, h) {
        let ctr = new Controller();
        return ctr[view].bind(ctr)(request, h);
    };
}
