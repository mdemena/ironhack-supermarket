const express = require('express');
const router = express.Router();

const carnes = [
	{
		id: 1,
		name: 'Filete de Ternera',
		description: 'Filete de Ternera Origen Girona - 300gr',
		price: 6,
	},
	{
		id: 2,
		name: 'Filetes de Pollo',
		description: 'De granja ECO - 400gr',
		price: 3.5,
	},
	{
		id: 3,
		name: 'Lomo de cerdo',
		description: 'Lomo de cerdo de Vic - 250gr',
		price: 3,
	},
	{
		id: 4,
		name: 'Chuletón de Buey',
		description: 'Waygu Origen Galicia -ECO - 800gr',
		price: 60,
	},
	{
		id: 5,
		name: 'Salchichas del país',
		description: 'salchichas de cerdo - 6 unidades',
		price: 2,
	},
];

router.get('/', (req, res, next) => {
	//buscar datos
	//armar la pagina de resultados
	console.log('carnes');

	res.render('carnes', {
		carnes,
	});
});

router.get('/:id', (req, res, next) => {
	if (req.params && req.params.id) {
		res.render('carne', {
			carne: carnes.filter((el) => el.id === parseInt(req.params.id))[0],
		});
	}
});

module.exports = router;
