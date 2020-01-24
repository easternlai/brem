// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
app.post("/api/groups", function(req, res) {
    console.log(req.body);
    db.Group.create({
      title: req.body.title,
      body: req.body.body,
      schedule: req.body.schedule,
      people: req.body.people,
      category: req.body.category
    })
      .then(function(dbGroup) {
        res.json(dbGroup);
      });
  });

    // PUT route for updating posts
    app.put("/api/groups", function(req, res) {
      db.Group.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
        .then(function(dbGroup) {
          res.json(dbGroup);
        });
    });


      // DELETE route for deleting posts
  app.delete("/api/groups/:id", function(req, res) {
    db.Group.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

};