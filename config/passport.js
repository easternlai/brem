//Authentication, Passport.js login/sign up forms
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

//Use the Local Storage for saving UN/PW to out DB

passport.use(new LocalStorage(  
    //sign in using the user's email
    {
        username: "email"
    },
    function(email, password, done) {
        //to find the user by email
        db.User.findOne({
            where:  {
                email: email
            }
        }).then(function(dbUser)    {
            //user that does not have an email registered already
            if (!dbUser)    {
                return done (null, false,   {
                    message: "No user with that email!"
                });
            }
            //correct username, byt incorrect password
            else if (!dbUser.validPassword(password))   {
                return donw (null, false,   {
                    message: "Incorrect password."
                });
            }
            return done (null, dbUser);
        });
    }   
));

////need to keep authentication across all of the HTTP requests and need to have Sequelize to serialize and deserialize the user
passport.serializeUser(function(user, cb)   {
    cb (null,user);
});

passport.deserializeUser(function(user,cb)  {
    cb(null, obj);
});

//export passport file
module.exports = passport;

