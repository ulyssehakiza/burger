var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//set up Router

router.get("/", function(req,res) {
    res.redirect("/burgers");
});

router.get("/burgers",function(req,res) {
    burger.all(function(Data) {
        res.render("index",{burger_data: Data});
    });
});

router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/eat-burgers/:id", function (req, res) {
    burger.eatBurger(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

router.put("/remake-burger/:id", function(req, res){
    burger.remake(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});


module.exports = router;
