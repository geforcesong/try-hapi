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
                module: 'rotating-file-stream',
                args: [
                    'nodejs-web.log',
                    {
                        path: './logs',
                        size: '10K',
                        interval: '1d',
                        compress: true
                    }
                ]
            }]
        }
    }
};
