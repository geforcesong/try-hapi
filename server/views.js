const path = require('path');
module.exports = async function setView(server) {
    await server.register(require('vision'));
    server.views({
        engines: {
            pug: require('pug')
        },
        relativeTo: path.resolve(__dirname, '..'),
        path: 'templates'
    });
}
