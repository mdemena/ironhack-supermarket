const express = require('express');
const hbs = require('hbs');
const path = require('path');
const chalk = require('chalk');
const bodyparser = require('body-parser');
const beersRouter = require('./routes/beersRouter');
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use('/beers', beersRouter);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.get('/', (req, res, next) => {
	res.render('index');
});

app.listen(3000, () =>
	console.log(
		chalk.green('Server estarted at port 3000, acces http://localhost:3000')
	)
);
