// Dependencies
// =============================================================

//XXXXXXXXXXXXXXXXX___AUTHENTICATION_XXXXXXXXXXXXXXXXXX

var path = require("path");

//require middleware file for authentication to see if user is logged in or not
var isAuthenticated = require ("../config/middleware/Authenticated");

module.exports = function(app) {
  //user that already has an account registered
  if(req.user)  {
    res.redirect("/")
  }

  // Routes
// =============================================================
// index route loads view.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


};

//XXXXXXXXXXXXXXXXX___END OF AUTHENTICATION_XXXXXXXXXXXXXXXXXX
