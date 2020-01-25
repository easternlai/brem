
var db = require("../models");

module.exports = function (app) {

    app.post("/api/join-lunch", function (req, res) {
        console.log("api" + req.body);
        db.userLunches.create({
            name: req.body.name,
            userId: req.body.userId,
            lunchId: req.body.lunchId
        }

        ).then(function (dbUserLunches) {
            res.json(dbUserLunches);
        })

    });

};