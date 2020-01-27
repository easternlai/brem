$(document).ready(function(){
    var loginForm = $("form.login");
    var nameInput = $("#name-input");
    var emailInput = $("#email-input");
    var passwordInput =$("#password-input");

    loginForm.on("submit", function(event){
        event.preventDefault();
        var userData = {
            name: nameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            OrgId: 1
        };
        if (!userData.email || !userData.password){
            return;
        }
        console.log(userData);
        $.post("/api/signup", userData).then(function(){
            window.location.replace("/home");
        });

        nameInput.val("");
        emailInput.val("");
        passwordInput.val("");
        
    });

  });