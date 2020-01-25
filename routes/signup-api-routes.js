// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function(app) {
    
    app.post("/api/signup", function(req,res){
        console.log("test signup-api");
        db.Users.create({
            email: req.body.email,
            password: req.body.password,
            orgId: 1
        }).then(function(){
            res.redirect(307, "/api/login");
        });
    });
};