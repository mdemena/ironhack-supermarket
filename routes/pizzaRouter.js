const express = require("express");

const router = express.Router();

const pizzas = [
    {
        id: 1,
        name: "Pizza Barbacoa",
        description: "Deliciosa salsa barbacoa junto a nuestra irresistible mezcla de 5 quesos (gouda, emmental, cheddar, mozarella y havarti).",
        price: 10,
    },
    {
        id: 2,
        name: "Pizza Cuatro Quesos",
        description: "Deliciosa salsa barbacoa junto a nuestra irresistible mezcla de 5 quesos (gouda, emmental, cheddar, mozarella y havarti).",
        price: 10,
    },
    {
        id: 3,
        name: "Pizza de Jamón",
        description: "Deliciosa salsa barbacoa junto a nuestra irresistible mezcla de 5 quesos (gouda, emmental, cheddar, mozarella y havarti).",
        price: 10,
    },
    {
        id: 4,
        name: "Pizza de Atún",
        description: "Deliciosa salsa barbacoa junto a nuestra irresistible mezcla de 5 quesos (gouda, emmental, cheddar, mozarella y havarti).",
        price: 9,
    },
    {
        id: 5,
        name: "Pizza Carbonara",
        description: "Deliciosa salsa barbacoa junto a nuestra irresistible mezcla de 5 quesos (gouda, emmental, cheddar, mozarella y havarti).",
        price: 11,
    },
  ];

router.get("/", (req, res, next) => {
  res.render("pizzas", pizzas);
});

router.get("/:id", (req, res, next) => {
    const filteredArr = pizzas.filter(
        (elem) =>
          elem.id === req.params.id
      );

    res.render("pizzas", filteredArr);
  });

module.exports = router;