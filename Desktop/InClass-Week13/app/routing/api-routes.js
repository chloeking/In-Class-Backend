var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get('/api/:table?', function (req, res) {
	var chosen = req.params.characters;

	if (chosen) {
		console.log(chosen);

		for (var i = 0; i < characters.length; i++) {
			if (chosen === characters[i].routeName) {
				res.json(characters[i]);
				return;
			}
		}

		res.json(false);
	} else {
		res.json(characters);
	}
});