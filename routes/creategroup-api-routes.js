var db = require("../models");

module.exports = function(app){

    //a get for route /api/creategroup that displays something


    app.get("/api/todos", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Orgs.findAll({}).then(function(dbTodo) {
          // We have access to the todos as an argument inside of the callback function
          res.json(dbTodo);
        });
      });

    //a get for route /api/creategroup/:id that displays something

    //a post for route /api/creategroup that creates group

    // a put for route /api/creategroup that allows for modifying group fields

    //a delete for route /api/creategroup that deletes a group 
}