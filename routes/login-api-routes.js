// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    console.log("test login-api");
    app.post("/api/login", passport.authenticate("local"), function(req, res){
        res.json(req.user);
    });

    app.get("/logout", function(req,res){
        req.logout();
        res.redirect("/");
    });
};