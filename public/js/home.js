var currentUser;

$.get("/user", function(data) {
            currentUser = data;
        });

    
$(document).ready(function(){
    var createForm = $("form.create");
    var lunchInput = $("#lunch-name-input");
    var restaurantInput = $("#restaurant-name-input");
    var typeInput = $("#lunch-type-input");

    createForm.on("submit", function (event) {

        event.preventDefault();

        var lunchData = {
            name: lunchInput.val().trim(),
            restaurant: restaurantInput.val().trim(),
            host: currentUser.name,
            type: typeInput.val().trim()

        };

        if (!lunchData.name || !lunchData.restaurant) {
            return;
        }

        console.log("create: " + lunchData.name + lunchData.restaurant);
        $.post("/api/create-lunch", lunchData).then(function () {
            lunchInput.val("");
            restaurantInput.val("");
            typeInput.val("");
        });

        window.location.href = "/home";
    });
});

//Moni scroll code
$(document).on("click", ".btn-secondary", function (event) {
    event.preventDefault();

    $("html, body").animate({
        scrollTop: $(".lunch-container").offset().top
    }, 800, function () {
    })
});



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
