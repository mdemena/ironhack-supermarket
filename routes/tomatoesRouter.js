const express = require('express');

const router = express.Router();


router.get("/", (req, res, next) => {
    console.log("rendering tomatoes");
    const data = [
        {
            id: 1,
            name: "Tomato Pera ",
            description: "Fresh tomato from south of Spain",
            price: 10,
        },
        {
            id: 2,
            name: "Tomato Monterosa",
            description: "Tomato monterosa from Catalunya",
            price: 12,
        },
        {
            id: 3,
            name: "Tomato Bullheart",
            description: "Big enough but empty inside",
            price: 14,
        },
        {
            id: 4,
            name: "Tomato Cherry",
            description: "Tomato italiano",
            price: 16,
        },
        {
            id: 5,
            name: "Green Tomato",
            description: "Like a red, but green",
            price: 17,
        },
    ];
    res.render("tomatoes", data);
});

module.exports = router;