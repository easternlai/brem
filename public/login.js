$(document).ready(function () {
    // form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
    ///ADD IN PREFERENCES DROPDOWN AND RESTRICTIONS

    // validate form with the username and password of the user
    loginForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }
        // clear the form after the username and password is entered and the loginUser function works
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        })
            .then(function (data) {
                console.log("BACK")
                console.log(data)

                window.location.replace("/members");

                // error, throw error
            })
            .catch(function (err) {
                $("#errors").text("users is not")
                console.log(err);

            });
    }
});
