// Dependencies
// =============================================================

//XXXXXXXXXXXXXXXXX___AUTHENTICATION_XXXXXXXXXXXXXXXXXX

var path = require("path");



module.exports = function(app) {
// index route loads view.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

// Routes
// =============================================================
};

//XXXXXXXXXXXXXXXXX___END OF AUTHENTICATION_XXXXXXXXXXXXXXXXXX
