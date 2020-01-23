console.log("test");

$(document).ready(function(){
    var loginForm = $("form.login");
    var emailInput = $("#email-input");
    var passwordInput =$("#password-input");

    loginForm.on("submit", function(event){
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        console.log(userData);
        if (!userData.email || !userData.password){
            return;
        }
        console.log(userData);
        $.post("/api/signup", userData).then(function(){
            window.location.replace("/home");
        });

        emailInput.val("");
        passwordInput.val("");
        
    });

  });