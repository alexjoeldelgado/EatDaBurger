const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll(data => {
        const burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne( ["name"], [`${req.body.name}`], result => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    burger.updateOne( `devoured = ${req.body.devoured}`, condition, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;