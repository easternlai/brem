//XXXXXXXXXXXXXXXXX___AUTHENTICATION_XXXXXXXXXXXXXXXXXX

var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app){
  //use passport file for local storage; if the user uses valid credentials,let them in, otherwise send an error
  app.post("api/login", passport.authenticate("local"), function(req, res)  {
    console.log("user", req.user)

    res.json(req.user);
  });

  //get the route for user sign-in and then save the credentials into the db and encrypt the password
  app.post("api/signup", function(req, res) {
    db.User.create({
      email:req.body.email,
      password:req.body.password
    }).then(function()  {
      res.redirect(307, "api/login");
    }).cathc(function(err)  {
      res.status(401).json(err);
    });
  });

  //route for getting data about the user to be used on the client side
  app.get("api/user_data", function(req, res) {
    if(!req.user) {
      res.json({});
    } else{
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  //XXXXXXXXXXXXXXXXX___END OF AUTHENTICATION_XXXXXXXXXXXXXXXXXX

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
