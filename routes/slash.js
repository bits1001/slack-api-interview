var express = require('express');
var router = express.Router();
var http = require('http');

router.post('/drawcard', function(req, res, next) {
  drawcard(res);
  console.log(req.body.response_url);
});

function drawcard(response) {
	var deck_options = {
	  host: 'deckofcardsapi.com',
	  path: '/api/deck/rg4r9gbbpkfv/draw/?count=1',
	  method: 'GET'
	};

	http.get(deck_options, function(res) {
		
		res.on("data", function(response_data) {
    		console.log("BODY: " + response_data);
    		var jsonObject = JSON.parse(response_data); 
    		var image = jsonObject.cards[0].image;
    		console.log(image);
    		var card_response = { "attachments": [ { "image_url":image} ] };
    		response.json(card_response);    	
  		});		
	});
}

module.exports = router;
