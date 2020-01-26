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

<<<<<<< HEAD
    app.get("/user", function(req, res){
        res.send(req.user);
    });
=======
    // app.get("/selectLunchToJoin", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/selectLunchToJoin.html"));
    //   });
    
>>>>>>> 446ed7ea92c8b24e3068103e97e40e597d51d961
    
};

