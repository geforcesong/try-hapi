const GOOD = require('good');

module.exports = {
    plugin: GOOD,
    options: {
        ops: {
            interval: 1000
        },
        reporters: {
            myFileReporter: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{ log: '*', response: '*' }]
            }, {
                module: 'good-squeeze',
                name: 'SafeJson'
            }, {
                module: 'good-file',
                args: ['./logs/access.log', { format: 'YYYY-MM-DD/HH:mm:ss.SSS' }]
            }]
        }
    }
};
