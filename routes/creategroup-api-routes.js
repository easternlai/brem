var db = require("../models");

module.exports = function(app) {

    app.post("/api/create-lunch", function(req, res){
        console.log("api" + req.body);
        db.Lunches.create(req.body).then(function(dbLunches){
            res.json(dbLunches);
        })
    });


    app.get("/api/create-lunch/", function(req, res) {
        db.Lunches.findAll({})
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });

      app.get("/api/create-lunch/:id", function(req, res) {
        db.Lunches.findOne({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });

    app.delete("/api/create-lunch/:id", function(req, res) {
        db.Lunches.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });

};