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

        console.log("test: "+ lunchData.name + lunchData.restaurant);
        $.post("/api/create-lunch", lunchData).then(function(){
            lunchInput.val("");
            restaurantInput.val("");
        });
    });
});
