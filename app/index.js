var express = require('express');

var app = express();
var port = 8888;

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
	res.send('Tout va à merveille');
})
.get('/test1', function(req, res){
	res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
	res.end('Tout marche à merveille pour cette page 1');
})
.get('/essai:num', function (req, res) {
	res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
	res.end('Tout marche à merveille pour cette page '+req.params.num);
})
.use(function (req, res, next) {
	res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
	res.status(404).send("Cette page n'existe pas.");
});

app.listen(port, function() {
		console.log('Le serveur écoute le port ' + port);
});
