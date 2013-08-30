var express = require('express');
var app = express();

var cards = {};
cards["1a"] = { "expiry" : "0514", "balance" : "1200" };
cards["2b"] = { "expiry" : "1016", "balance" : "600" };

// Authenticator
app.use(express.basicAuth(function(user, pass) {
 return user === 'merchant' && pass === 'merchant';
}));

app.get('/card/:id', function(req, res) {

	if (cards[req.params.id] == undefined) {
    	res.statusCode = 404;
    	return res.send('Invalid card id');
  	}

	res.json(cards[req.params.id]);
});

app.listen(process.env.PORT || 4730);
