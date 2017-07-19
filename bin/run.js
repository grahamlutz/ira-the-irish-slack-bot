'use strict';

const server = require('../server/server');
const http   = require('http');

const app = http.createServer(server);
app.listen(3001);

app.on('listening', () => {
	console.log(`slackBot is listening on ${app.address().port} in ${server.get('env')} mode`)
})