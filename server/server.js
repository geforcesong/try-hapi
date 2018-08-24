const Hapi = require('hapi');
const config = require('../configuration/config.json');
const RouteManager = require('../server/routes');
const logger = require('./logger');

class Server {

    constructor() {
        this.hapiServer = Hapi.server({
            port: config.port || 3000,
            host: config.host || 'localhost'
        });
        (new RouteManager(this.hapiServer)).register(this.hapiServer);
    }

    async start() {
        await this.hapiServer.register(logger);
        await this.hapiServer.register(require('./plugins/custom-plugin'));
        await this.hapiServer.start();
        console.log(`Server running at: ${this.hapiServer.info.uri}`);
    }
}

module.exports = Server;