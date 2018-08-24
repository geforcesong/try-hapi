const Hapi = require('hapi');
const config = require('../configuration/config.json');
const RouteManager = require('../server/routes');
const logger = require('./logger');
const setView = require('./views');

class HapiServer {

    constructor() {
        this.server = Hapi.server({
            port: config.port || 3000,
            host: config.host || 'localhost'
        });
        (new RouteManager(this.server)).register(this.server);
    }

    async start() {
        await this.server.register(logger);
        await this.server.register(require('./plugins/custom-plugin'));
        await setView(this.server);
        await this.server.start();
        console.log(`Server running at: ${this.server.info.uri}`);
    }
}

module.exports = HapiServer;