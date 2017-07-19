 'use strict';

const RtmClient = require('@slack/client').RtmClient;

module.exports.init = function slackClient(token, logLevel) {
	const rtm = new RtmClient(token, {logLevel: 'debug'});
	return rtm;
}