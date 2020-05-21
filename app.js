const express = require('express');
const hbs = require('hbs');
const path = require('path');
const chalk = require('chalk');
const bodyparser = require('body-parser');
// const frutasRouter = require("frutasRouter")
const carnesRouter = require('./routes/carnesRouter');
const beersRouter = require('./routes/beersRouter');
const tomatoes = require('./routes/tomatoesRouter');
const pizzaRouter = require('./routes/pizzaRouter');

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use('/pizzas', pizzaRouter);
// app.use("/frutas", frutasRouter)
app.use('/carnes', carnesRouter);
app.use('/tomatoes', tomatoes);
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
