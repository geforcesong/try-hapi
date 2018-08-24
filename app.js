const HapiServer = require('./server/server');

const hapiServer = new HapiServer();

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

hapiServer.start();
