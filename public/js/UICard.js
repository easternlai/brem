var currentUser;

$.get("/user", function(data) {
            currentUser = data;
        });


$(document).ready(function () {
  // lunchContainer holds all of our posts
  var lunchContainer = $(".lunch-container");
  //var boxshaddow = $(".box-shadow");
  //var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handlePostDelete);
  //$(document).on("click", "button.edit", handlePostEdit);
  $(document).on("click", "button.join", handlePostJoin);  // *****************************
  //postCategorySelect.on("change", handleCategoryChange);
  var posts;

  // This function grabs posts from the database and updates the view
  function getPosts() {
    //var categoryString = category || "";
    //if (categoryString) {
    //  categoryString = "/category/" + categoryString;
    //}
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
    //var newPostCategory = $("<h7>");
    //newPostCategory.text("Status is: " + post.category);
    //   newPostCategory.css({
    //     float: "right",
    //     "font-weight": "500",
    //     "margin-top": "-15px"
    //   });

    newPostCard.css({
      float: "left"
    });

    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    newPostTitle.text(post.name + " ");
    newPostBody.text("Proposed food is: " + post.restaurant);
    newPostSchedule.text("Lunch ID: " + post.id);
    newPostPeople.text("Created at: " + post.createdAt);
    newPostHost.text("Host: " + currentUser.email);
    newPostType.text("Type: " + post.type);
    newPostBody.text(post.body);
    var formattedDate = new Date(post.createdAt);
    //formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    //newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostCardHeading.append(deleteBtn);
    //   newPostCardHeading.append(editBtn);
      newPostCardHeading.append(joinBtn); // *********************
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostBody);
    newPostCardHeading.append(newPostSchedule);
    newPostCardHeading.append(newPostHost);
    newPostCardHeading.append(newPostType);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + post.type + "&limit=1&api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4";
    console.log("newposttype: " + post.type);
    newPostCardHeading.append(newPostPeople);
    //newPostCardHeading.append(newPostCategory);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
       
      // create a var to hold an image
      var image = $("<img>").attr("src", response.data[0].images.fixed_height_downsampled.url);
      //var image = $("<img>").attr("src", response.data[0].images.original.url);


      console.log(response.data[0].images.original.url);
      //add a class to each gif
      // image.addClass("gifImage");
      // //add a attribute to each gif
      // image.attr("thisImageURL", response.data[limit].images.original.url);
      //display the image to a DOM location
      //$("#movies-view").prepend(image);
      newPostCardBody.append(image);
      
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
    console.log(currentPost.id);
  }

  // This function figures out which post we want to edit and takes it to the
  // Appropriate url
  // function handlePostEdit() {
  //   var currentPost = $(this)
  //     .parent()
  //     .parent()
  //     .data("post");
  //   window.location.href = "/createLunch?post_id=" + currentPost.id;
  // }

// **************************************
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
      $.post("/api/join-lunch", joinData).then(function () {
        console.log(joinData);
    });

    }


  // This function displays a message when there are no posts
  function displayEmpty() {
    lunchContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("Create a lunch to start!");
    lunchContainer.append(messageH2);
  }

  // This function handles reloading new posts when the category changes
  // function handleCategoryChange() {
  //   var newPostCategory = $(this).val();
  //   getPosts(newPostCategory);
  // }

});
