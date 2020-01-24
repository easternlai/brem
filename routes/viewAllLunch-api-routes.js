// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
// GET route for getting all of the posts
app.get("/api/groups/", function(req, res) {
    db.Group.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/groups/category/:category", function(req, res) {
    db.Group.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/groups/:id", function(req, res) {
    db.Group.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
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