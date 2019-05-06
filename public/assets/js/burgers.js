// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-pickedup").on("click", function(event) {
    var id = $(this).data("id");
    var newPickedup = $(this).data("newpickedup");

    var newPickedupState = {
      pickedup: newPickedup
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newPickedupState
    }).then(
      function() {
        console.log("changed pickedup to", newPickedup);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if($("#bur").val().trim().length<1){
      return alert("Please enter a burger name.");
    }
    else if($("#bur-customer").val().length<1){
      return alert("Please enter your name for the order.");
    }
    else{
      var newBurger = {
        burger_name: $("#bur").val().trim() + " for " + $("#bur-customer").val().trim(),
        // customer_name: $("#bur-customer").val().trim()
        // pickedup: $("[name=pickedup]:checked").val().trim()
      };
    }
    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("ordered new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form1").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#bur1").val().trim()
      };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("ordered new burger");
        location.reload();
      }
    );
  });

  $(".create-form2").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#bur2").val().trim()
      };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("ordered new burger");
        location.reload();
      }
    );
  });

  $(".create-form3").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#bur3").val().trim()
      };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("ordered new burger");
        location.reload();
      }
    );
  });

  $(".create-form4").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#bur4").val().trim()
      };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("ordered new burger");
        location.reload();
      }
    );
  });

  $(".create-form5").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#bur5").val().trim()
      };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("ordered new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE "i.e. devour/eat it" request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("devour/eat the burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
