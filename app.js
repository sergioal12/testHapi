const Hapi = require('hapi');
const server = new Hapi.server({port:4000, host:'localhost'});
const db = require('./database').db;
const routes = require('./routes');

server.route(routes);

server.route({
    method: 'GET',
    path: '/',
    handler(request, reply) {
      db;//probando que la base de datos esta ok
	return 'Hello, world!';
    }
});


server.start(err => {
    if (err) {
	throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

exports.server = server;
