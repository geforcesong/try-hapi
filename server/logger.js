const GOOD = require('good');

module.exports = {
    plugin: GOOD,
    options: {
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
                args: ['./logs/access.log']
            }]
        }
    }
};
