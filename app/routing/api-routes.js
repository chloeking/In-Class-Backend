var bodyParser = require('body-parser');
var path = require('path');
var list = require(path.join(__dirname, '../data/tables.js'))

module.exports = function () {


	app.get('/api/:table?', function (req, res) {
		res.json(list.tablelist);
	});

	app.post('/api/new', function (req, res) {
		var newTable = req.body;
		newTable.routeName = newTable.name.replace(/\s+/g, '').toLowerCase();

		console.log(newTable);

		list.tablelist.push(newTable);

		res.json(newTable);
	});
}