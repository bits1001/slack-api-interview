var express = require('express');
var router = express.Router();
const { IncomingWebhook } = require('@slack/client');
const url = "https://hooks.slack.com/services/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";
const webhook = new IncomingWebhook(url);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { message: 'Home', title: 'Slacker App' });
});

/* GET rained page. */
router.get('/rained', function(req, res, next) {
	// Send text to the slack channel
	webhook.send('It has rained', function(err, res) {
	    if (err) {
	        console.log('Error:', err);
	    } else {
	        console.log('Message sent: ', res);
	    }
	});
  res.render('rained', { message: 'It rained. Message sent to Slack.', title: 'Slacker App' });
});

module.exports = router;
