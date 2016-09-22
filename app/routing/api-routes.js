var bodyParser = require('body-parser');
var path = require('path');
var list = require(path.join(__dirname, '..','/data/tables.js'))

module.exports = function (app) {


	app.get('/api/table', function (req, res) {
		res.json(list.tablelist);
		res.json(list.waitlist);
	});

	app.post('/api/new', function (req, res) {
		var newTable = req.body;
		newTable.routeName = newTable.name.replace(/\s+/g, '').toLowerCase();

		console.log(newTable);
	if(list.tablelist.length<5){
		list.tablelist.push(newTable);
	}
	else{
		list.waitlist.push(newTable);
	}


		res.json(newTable);
	});
}