<<<<<<< HEAD
var currentUser;

$.get("/user", function(data) {
            console.log(data);
        }).then(function(userInfo){
            currentUser = userInfo;
        });

       
    


$(document).ready(function(){
=======
$(document).ready(function () {
>>>>>>> 075cfd4e3ca273aeb43baffa2747be3b116b71c2
    var createForm = $("form.create");
    var lunchInput = $("#lunch-name-input");
    var restaurantInput = $("#restaurant-name-input");
    var hostInput = $("#restaurant-host-input");
    var typeInput = $("#lunch-type-input");

    createForm.on("submit", function (event) {

        event.preventDefault();

        var lunchData = {
            name: lunchInput.val().trim(),
            restaurant: restaurantInput.val().trim(),
            host: hostInput.val().trim(),
            type: typeInput.val().trim()

        };

        if (!lunchData.name || !lunchData.restaurant) {
            return;
        }

<<<<<<< HEAD
        $.post("/api/create-lunch", lunchData).then(function(){
=======
        console.log("create: " + lunchData.name + lunchData.restaurant);
        $.post("/api/create-lunch", lunchData).then(function () {
>>>>>>> 075cfd4e3ca273aeb43baffa2747be3b116b71c2
            lunchInput.val("");
            restaurantInput.val("");
            hostInput.val("");
            typeInput.val("");
        });

        window.location.href = "/home";
    });
});


<<<<<<< HEAD
$(document).ready(function(){
=======
$(document).ready(function () {
>>>>>>> 075cfd4e3ca273aeb43baffa2747be3b116b71c2

    var joinForm = $("form.join");
    var groupIdInput = $("#groupid-input");

<<<<<<< HEAD
    joinForm.on("submit", function(event){
        console.log(currentUser.id);
=======
    joinForm.on("submit", function (event) {

>>>>>>> 075cfd4e3ca273aeb43baffa2747be3b116b71c2
        event.preventDefault();

        var joinData = {
            name: currentUser.email,
            userxId: currentUser.id,
            lunchxId: groupIdInput.val()
        };

<<<<<<< HEAD
    
        $.post("/api/join-lunch", joinData).then(function(){
=======
        $.post("/api/join-lunch", joinData).then(function () {
>>>>>>> 075cfd4e3ca273aeb43baffa2747be3b116b71c2
            userIdInput.val("");
            groupIdInput.val("");
        });
    });
});

<<<<<<< HEAD
=======

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
>>>>>>> 075cfd4e3ca273aeb43baffa2747be3b116b71c2
