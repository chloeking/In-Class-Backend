var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get('/api/:table?', function (req, res) {
	res.json(tables);	
});

app.post('/api/new', function (req, res) {
	var newTable = req.body;
	newTable.routeName = newTable.name.replace(/\s+/g, '').toLowerCase();

	console.log(newTable);

	tables.push(newTable);

	res.json(newTable);
});