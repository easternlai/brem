var db = require("../models");

module.exports = function(app) {

    app.post("/api/create-lunch", function(req, res){
        console.log("api" + req.body);
        db.Lunches.create(req.body).then(function(dbLunches){
            res.json(dbLunches);
        })

    });

};