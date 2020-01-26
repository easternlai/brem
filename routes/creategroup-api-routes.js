var db = require("../models");

module.exports = function(app) {

    // app.post("/api/create-lunch", function(req, res){
    //     console.log("api" + req.body);
    //     db.Lunches.create({
    //         name: req.body.name,
    //         restaurant: req.body.restaurant
    //     }).then(function(dbLunches){
    //         res.json(dbLunches);
    //     })

    // });


    app.post("/api/create-lunch", function(req, res){
        console.log("api" + req.body);
        db.Lunches.create(req.body).then(function(dbLunches){
            res.json(dbLunches);
        })
    });


    app.get("/api/groups/", function(req, res) {
        db.Lunches.findAll({})
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });

      app.get("/api/groups/:id", function(req, res) {
        db.Lunches.findOne({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });

    app.delete("/api/groups/:id", function(req, res) {
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