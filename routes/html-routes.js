var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app){
    app.get("/", function(req, res){

        if(req.user){
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
    app.get("/login", function(req, res){
        if(req.user){
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/home", isAuthenticated, function (req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
        
    });

    app.get("/user", function(req, res){
        res.send(req.user);
    });


    
};

