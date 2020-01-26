
var db = require("../models");

module.exports = function (app) {

    app.post("/api/join-lunch", function (req, res) {
        console.log("api" + req.body);
        db.userLunches.create(req.body).then(function (dbUserLunches) {
            res.json(dbUserLunches);
        });

    });

};