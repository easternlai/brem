// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function(app) {

    //test
    
    app.post("/api/signup", function(req,res){
        console.log("test signup-api");
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(){
            res.redirect(307, "/api/login");
        });
    });
};