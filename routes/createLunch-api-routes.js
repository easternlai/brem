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
};