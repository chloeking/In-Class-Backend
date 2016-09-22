var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
module.exports=function (app) {

	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, 'home.html'));
	});

	app.get('/reserve', function (req, res) {
		res.sendFile(path.join(__dirname, 'reserve.html'));
	});

	app.get('/tables', function (req, res) {
		res.sendFile(path.join(__dirname, 'tables.html'));
	});
}