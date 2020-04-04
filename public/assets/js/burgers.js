$(function() {
    $(".change-devour").on("click", function(event) {
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");        

        const newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then( () => {
            console.log("Burger has been devoured", newDevour);
            location.reload();
            });
        });

    $(".create-form").on("submit", (event) => {
        event.preventDefault();

        const newBurger = {
        name: $("#burger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then( () => {
            console.log("Created new burger!");
            location.reload();
            });
        });
});