const express = require('express');

const router = express.Router();
const data = [
	{
		id: 1,
		name: 'Tomato Pera ',
		description: 'Fresh tomato from south of Spain',
		price: 10,
	},
	{
		id: 2,
		name: 'Tomato Monterosa',
		description: 'Tomato monterosa from Catalunya',
		price: 12,
	},
	{
		id: 3,
		name: 'Tomato Bullheart',
		description: 'Big enough but empty inside',
		price: 14,
	},
	{
		id: 4,
		name: 'Tomato Cherry',
		description: 'Tomato italiano',
		price: 16,
	},
	{
		id: 5,
		name: 'Green Tomato',
		description: 'Like a red, but green',
		price: 17,
	},
];
router.get('/', (req, res, next) => {
	console.log('rendering tomatoes');

	res.render('tomatoes', { data });
});

router.get('/:id', (req, res, next) => {
	if (req.params && req.params.id) {
		res.render('tomatoe', {
			tomatoe: data.filter((el) => el.id === parseInt(req.params.id))[0],
		});
	}
});
module.exports = router;
