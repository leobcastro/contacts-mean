var express = require('express');

module.exports = function() {

	var app = express();

	var load = require('express-load');

	var bodyParser = require('body-parser');

	app.set('port', 3000);

	// Definindo diretorio publico para paginas
	app.use(express.static('./public'));

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};