var bodyParser = require('body-parser');
var path = require('path');


module.exports=function (app) {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname,'..', 'html/home.html'));
	});
	app.get('/home*', function (req, res) {
		res.sendFile(path.join(__dirname,'..', 'html/home.html'));
	});
	app.get('/reserve*', function (req, res) {
		res.sendFile(path.join(__dirname,'..', 'html/reserve.html'));
	});

	app.get('/tables*', function (req, res) {
		res.sendFile(path.join(__dirname,'..', 'html/tables.html'));
	});
}