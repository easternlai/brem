var currentUser;

$.get("/user", function(data) {
            console.log(data);
        }).then(function(userInfo){
            currentUser = userInfo;
        });

       
    


$(document).ready(function(){
    var createForm = $("form.create");
    var lunchInput = $("#lunch-name-input");
    var restaurantInput = $("#restaurant-name-input");

    createForm.on("submit", function(event){
        
        event.preventDefault();

        var lunchData = {
            name: lunchInput.val().trim(),
            restaurant: restaurantInput.val().trim()
        };

        if(!lunchData.name || !lunchData.restaurant){
            return;
        }

        $.post("/api/create-lunch", lunchData).then(function(){
            lunchInput.val("");
            restaurantInput.val("");
        });

        window.location.href = "/home";
    });
});


$(document).ready(function(){

    var joinForm = $("form.join");
    var groupIdInput = $("#groupid-input");

    joinForm.on("submit", function(event){
        console.log(currentUser.id);
        event.preventDefault();

        var joinData = {
            name: currentUser.email,
            userxId: currentUser.id,
            lunchxId: groupIdInput.val()
        };

    
        $.post("/api/join-lunch", joinData).then(function(){
            userIdInput.val("");
            groupIdInput.val("");
        });
    });
});

