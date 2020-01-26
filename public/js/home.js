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

        console.log("create: "+ lunchData.name + lunchData.restaurant);
        $.post("/api/create-lunch", lunchData).then(function(){
            lunchInput.val("");
            restaurantInput.val("");
        });
    });
});


$(document).ready(function(){
    
    var joinForm = $("form.join");
    var userIdInput = $("#userid-input");
    var groupIdInput = $("#groupid-input");

    joinForm.on("submit", function(event){
        
        event.preventDefault();

        var joinData = {
            name: userIdInput + groupIdInput,
            userxId: userIdInput.val(),
            lunchxId: groupIdInput.val()
        };
    
        $.post("/api/join-lunch", joinData).then(function(){
            lunchInput.val("");
            restaurantInput.val("");
        });
    });
});