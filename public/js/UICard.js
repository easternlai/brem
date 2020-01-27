var currentUser;

$.get("/user", function(data) {
            currentUser = data;
        });


$(document).ready(function () {
  // lunchContainer holds all of our posts
  var lunchContainer = $(".lunch-container");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handlePostDelete);
  //$(document).on("click", "button.edit", handlePostEdit);
  $(document).on("click", "button.join", handlePostJoin);  
  var posts;

  // This function grabs posts from the database and updates the view
  function getPosts() {

    $.get("/api/create-lunch/", function (data) {
      console.log("Posts", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  };

  // This function does an API call to delete posts
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/create-lunch/" + id
    })
      .then(function () {
        //getPosts(postCategorySelect.val());
        getPosts();
      });
  }

  // Getting the initial list of posts
  getPosts();
  // InitializeRows handles appending all of our constructed post HTML inside
  // lunchContainer
  function initializeRows() {
    lunchContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }
    lunchContainer.append(postsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    
    var newPostCard = $("<div>");
    var newImage;
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + post.restaurant + "&location=94111";

    $.ajax({
       url: myurl,
       headers: {
        'Authorization':'Bearer EGAEY_VMQ-b52IDl7iItiMgpKvRRphqB-cZRV4eRnlZIZ6fED9UV1WksLFEgUhVvwmNzlY_txJXVnHHPDSqjIUQ70KDTY_Ey6H5hQ6wNO6Gx6xZHh77oGU3fW3kuXnYx',
    },
       method: 'GET',
       dataType: 'json',
       success: function(data){
                   newImage = $("<img>").attr("src", data.businesses[0].image_url);
                   
       }
    }).then(function(data){

      
      newPostCard.addClass("card col-md-4");
      var newPostCardHeading = $("<div>");
      newPostCardHeading.addClass("card-header");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      //var editBtn = $("<button>");
      var joinBtn = $("<button>");   // *********************
      //editBtn.text("EDIT");
      joinBtn.text("JOIN");   // *********************
      //editBtn.addClass("edit btn btn-default");
      joinBtn.addClass("join btn btn-default");    // *********************
      var newPostTitle = $("<h3>");
      var newPostDate = $("<small>");
      var newPostBody = $("<h6>");
      var newPostHost = $("<h6>");
      var newPostType = $("<h6>");
      var newPostSchedule = $("<h6>");
      var newPostPeople = $("<h6>");
  
      newPostCard.css({
        float: "left"
      });
  
      var newPostCardBody = $("<div>");
      newPostCardBody.addClass("card-body");
      var newPostBody = $("<p>");
      newPostTitle.text(post.name + " ");
      newPostBody.text("Rating: " + data.businesses[0].rating);
      newPostSchedule.text("Restaurant: " + data.businesses[0].name);
      newPostPeople.text("Created at: " + post.createdAt);
      newPostHost.text("Host: " + currentUser.name);
      newPostType.text("Type: " + post.type);
      newPostBody.text(post.body);
      newPostTitle.append(newPostDate);
      newPostCardHeading.append(deleteBtn);
      newPostCardHeading.append(joinBtn); 
      newPostCardHeading.append(newPostTitle);
      newPostCardHeading.append(newPostBody);
      newPostCardHeading.append(newPostSchedule);
      newPostCardHeading.append(newPostHost);
      newPostCardHeading.append(newPostType);
      newPostCardHeading.append(newPostPeople);
      newPostCardBody.append(newPostBody);
      newPostCard.append(newPostCardHeading);
      newPostCard.append(newPostCardBody);
      newPostCard.data("post", post);
      newPostCardBody.append(newImage);
  
    });


    return newPostCard;
  }

  // This function figures out which post we want to delete and then calls
  // deletePost
  function handlePostDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    deletePost(currentPost.id);
  }

  function handlePostJoin() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("post");

        var joinData = {
          name: currentUser.email,
          userxId: currentUser.id,
          lunchxId: currentPost.id
      };
      // window.location.href = "/selectLunchToJoin?group_id=" + currentPost.id;
      $.post("/api/join-lunch", joinData);
    }


  // This function displays a message when there are no posts
  function displayEmpty() {
    lunchContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("Create a lunch to start!");
    lunchContainer.append(messageH2);
  }

});






                  //  var id = item.id;
                  //  var alias = item.alias;
                  //  var phone = item.display_phone;
                  //  var image = item.image_url;
                  //  var name = item.name;
                  //  var rating = item.rating;
                  //  var reviewcount = item.review_count;
                  //  var address = item.location.address1;
                  //  var city = item.location.city;
                  //  var state = item.location.state;
                  //  var zipcode = item.location.zip_code;
                   // Append our result into our page