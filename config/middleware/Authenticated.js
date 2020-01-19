//middleware that restricts routes that a user cannot get into without being loggin in properly
module.exports = function(req, res, next)   {
    //if the user is not logged in, continue the request to the restricted route
    if (req.user)   {
        return next();
    }
    //if the user is NOT logged in, redirect them to the login page
    return res.redirect("/");
};