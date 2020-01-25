
$(document).ready(function(){
    var loginForm = $("form.login");
    var emailInput = $("#email-input");
    var passwordInput =$("#password-input");

    loginForm.on("submit", function(event){
        event.preventDefault();
        var userData = {
            OrgId: 1,
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
        console.log("test");

        if (!userData.email || !userData.password){
            return;
        }
   \
        $.post("/api/login", userData).then(function(){
            window.location.replace("/home");
        });

        emailInput.val("");
        passwordInput.val("");
        
    });

  });