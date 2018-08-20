const Server = require('./server/server');

const server = new Server();

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

server.start();
