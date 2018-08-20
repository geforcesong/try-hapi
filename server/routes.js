const GeoController = require('../controllers/geoController');

class RouteManager{
    constructor(server){
        this.server = server;
    }

    register(){
        this.registerOne('GET', '/', GeoController);
        this.registerOne('GET', '/about', GeoController, 'loadAbout');
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
