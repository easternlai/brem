//NPM packages
var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");

//Ports
var PORT = process.env.PORT || 8080;
var db = require("./models");

//Creating express
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Passport Sessions
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//Routes

app.post("/api/signup", function(req,res){
  console.log("test signup-api");
  db.User.create({
      email: req.body.email,
      password: req.body.password
  }).then(function(){
      res.redirect(307, "/api/login");
  });
});
require("./routes/html-routes.js")(app);
// require("./routes/creategroup-api-routes.js")(app);
// require("./routes/joingroup-api-routes.js")(app);
require("./routes/login-api-routes.js")(app);
require("./routes/signup-api-routes.js")(app);
require("./routes/createLunch-api-routes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
