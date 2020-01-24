$(document).ready(function() {
    // blogContainer holds all of our posts
    var blogContainer = $(".blog-container");
    var postCategorySelect = $("#category");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handlePostDelete);
    $(document).on("click", "button.edit", handlePostEdit);
    $(document).on("click", "button.join", handlePostJoin);
    postCategorySelect.on("change", handleCategoryChange);
    var posts;
  
    // This function grabs posts from the database and updates the view
    function getPosts(category) {
      var categoryString = category || "";
      if (categoryString) {
        categoryString = "/category/" + categoryString;
      }
      $.get("/api/groups" + categoryString, function(data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty();
        }
        else {
          initializeRows();
        }
      });
    }
  
    // This function does an API call to delete posts
    function deletePost(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/groups/" + id
      })
        .then(function() {
          getPosts(postCategorySelect.val());
        });
    }
  
    // Getting the initial list of posts
    getPosts();
    // InitializeRows handles appending all of our constructed post HTML inside
    // blogContainer
    function initializeRows() {
      blogContainer.empty();
      var postsToAdd = [];
      for (var i = 0; i < posts.length; i++) {
        postsToAdd.push(createNewRow(posts[i]));
      }
      blogContainer.append(postsToAdd);
    }
  
    // This function constructs a post's HTML
    function createNewRow(post) {
      var newPostCard = $("<div>");
      newPostCard.addClass("card");
      var newPostCardHeading = $("<div>");
      newPostCardHeading.addClass("card-header");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      var joinBtn = $("<button>");
      editBtn.text("EDIT");
      joinBtn.text("JOIN");
      editBtn.addClass("edit btn btn-default");
      joinBtn.addClass("join btn btn-default");
      var newPostTitle = $("<h2>");
      var newPostDate = $("<small>");
      var newPostBody = $("<h5>");
      var newPostSchedule = $("<h5>");
      var newPostPeople = $("<h5>");
      var newPostCategory = $("<h5>");
      newPostCategory.text("Status is: " + post.category);
      newPostCategory.css({
        float: "right",
        "font-weight": "700",
        "margin-top":
        "-15px"
      });
      var newPostCardBody = $("<div>");
      newPostCardBody.addClass("card-body");
      var newPostBody = $("<p>");
      newPostTitle.text(post.title + " ");
      newPostBody.text("Proposed food is: " + post.body);
      newPostSchedule.text("Proposed lunch time is: " + post.schedule);
      newPostPeople.text("Created by: " + post.people);
      newPostBody.text(post.body);
      var formattedDate = new Date(post.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      //newPostDate.text(formattedDate);
      newPostTitle.append(newPostDate);
      newPostCardHeading.append(deleteBtn);
      newPostCardHeading.append(editBtn);
      newPostCardHeading.append(joinBtn);
      newPostCardHeading.append(newPostTitle);
      newPostCardHeading.append(newPostBody);
      newPostCardHeading.append(newPostSchedule);
      newPostCardHeading.append(newPostPeople);
      newPostCardHeading.append(newPostCategory);
      newPostCardBody.append(newPostBody);
      newPostCard.append(newPostCardHeading);
      newPostCard.append(newPostCardBody);
      newPostCard.data("post", post);
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
  
    // This function figures out which post we want to edit and takes it to the
    // Appropriate url
    function handlePostEdit() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("post");
      window.location.href = "/createLunch?post_id=" + currentPost.id;
    }
  
       // This function handles Join
    function handlePostJoin() {
        var currentPost = $(this)
          .parent()
          .parent()
          .data("post");
        window.location.href = "/selectLunchToJoin?group_id=" + currentPost.id;
      }


    // This function displays a message when there are no posts
    function displayEmpty() {
      blogContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("Nvigate <a href='/createLunch'>here</a> to create a new lunch meet!");
      blogContainer.append(messageH2);
    }
  
    // This function handles reloading new posts when the category changes
    function handleCategoryChange() {
      var newPostCategory = $(this).val();
      getPosts(newPostCategory);
    }
  
  });
  