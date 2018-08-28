const winston = require('winston');
const goodWinston = require('hapi-good-winston').default;
var moment = require('moment');
const path = require('path');
function createLogger(fileName) {
    /*var logger = winston.add(winston.transports.DailyRotateFile, {
      filename: util.format('%s/%s', logPath, fileName),
      datePattern: '-yyyy-MM-dd.log'
    });
    logger.remove(winston.transports.Console);
    return logger;*/
    let filePath = path.resolve(__dirname, '..', 'logs');
    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.File)({
                filename: `${filePath}/${fileName}.log`,
                maxFiles: 1,
                json: false,
                formatter: logFormatter,
                timestamp: function () {
                    return moment().format('YYYY-MM-DD HH:mm:ss');
                }
            })
        ]
    });
    return logger;
}

const logFormatter = function(options) {
    // Return string will be passed to logger.

    return options.timestamp() +` `+ options.level.toUpperCase() +
        ` `+ (options.message ? options.message : ``) +
        (options.meta && Object.keys(options.meta).length ?
            `\n\t`+ JSON.stringify(options.meta) : `` );
};

module.exports = async function registerLogger (server) {
    var logger = createLogger('access');
    const options = {
        reporters: {
            // Simple and straight forward usage
            winston: [goodWinston(logger)]
        }
    };
    await server.register({
        plugin: require('good'),
        options
    })
};
