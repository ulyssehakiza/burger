var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
                name, false
            ], cb);
    },
    eatBurger: function (id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    },
    remake: function (id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
            devoured: false
        }, condition, cb);
    }
};

module.exports = burger;