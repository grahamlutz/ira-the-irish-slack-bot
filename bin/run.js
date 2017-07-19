'use strict';

const slackClient = require('../server/slackClient');
const server = require('../server/server');
const http   = require('http');

const app = http.createServer(server);

const slackToken = process.env.SLACK_API_TOKEN;
const slackLogLevel = 'verbose';

const rtm = slackClient.init(slackToken, slackLogLevel);
rtm.start();

slackClient.addAuthenticatedHandler(rtm, () => app.listen(3001) )

app.on('listening', () => {
	console.log(`slackBot is listening on ${app.address().port} in ${server.get('env')} mode`)
})