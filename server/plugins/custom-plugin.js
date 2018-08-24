module.exports = {
    name: 'custom-plugin',
    version: '1.0.0',
    register: async function (server, options) {

        server.ext('onRequest', function (request, h) {
            console.log(`accessing ${request.path}`);
            
            // return h.redirect('http://example.com').takeover();
            return h.continue;
        });

    }
}