const express = require("express")
const router = express.Router()
const frutas = [{
        "id": "00010",
        "name": "mandarina",
        "description": "mandarina valencia",
        "price": "3.15$/kg"
    },
    {
        "id": "00011",
        "name": "fresa",
        "description": "fresa huelva",
        "price": "4.20$/kg"
    },
    {
        "id": "00012",
        "name": "melon",
        "description": "melon almeria",
        "price": "6$/kg"
    },
    {
        "id": "00013",
        "name": "manzana",
        "description": "golden italiana",
        "price": "2.30$/kg"
    },
    {
        "id": "00014",
        "name": "pera",
        "description": "Williams",
        "price": "1.90$/kg"
    }
]

router.get("/frutas", (req, res, next) => {
    res.render("/frutas")
})
router.get("/:id", (req, res, next) => {
    res.render("/frutas")
})

module.exports = router