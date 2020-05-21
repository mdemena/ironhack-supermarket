const express = require('express');

const data = [
	{
		id: 'estrella',
		name: 'Estrella Damm',
		description: 'La cervessa més consumida a Catalunya',
		price: 1.25,
	},
	{
		id: 'voll',
		name: 'Voll Damm',
		description: 'La cervessa torrada més consumida a Catalunya',
		price: 2.0,
	},
	{
		id: 'alhambra-verde',
		name: 'Alhambra Verde',
		description:
			"Cervessa d'Andalusia molt agradable l paladar, molt freda està per morir-se!!",
		price: 2.25,
	},
	{
		id: 'alhambra-roja',
		name: 'Alhambra Roja',
		description: "Cervessa torrada d'Andalusa amb molt de gust!!",
		price: 2.4,
	},
	{
		id: '1906',
		name: '1906',
		description: 'Cervessa Gallega molt bona pel vermut!!',
		price: 2.15,
	},
	{
		id: '1906-red',
		name: '1906 Red',
		description: 'Cervessa torrada Gallega increiblement bona!!',
		price: 2.15,
	},
];

const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('beers', data);
});

router.get('/:id', (req, res, next) => {
	if (req.params && req.params.id) {
		res.render('beer', { beer: data.filter((el) => el.id === req.params.id) });
	}
});

module.exports = router;
