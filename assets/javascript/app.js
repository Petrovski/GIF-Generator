
// Wait for the document to be ready to load everything
$(document).ready(function(){

    // Create a click function for the buttons to create GIFs
    $('.gif-buttons').on("click", function(){
        // Assign a variable to the buttons data-search attribute to include in API variable
        var x = $(this).data("search");

        // Assign a variable to acquire the API link with the API key to pull the data
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=8oRpogwv4c8vkFUetQ2qfgXpoW6s8k8K&limit=10";
        console.log(queryURL);

        // Create AJAX request to be able to apply the data to the page
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            
            // Use a for a loop to loop through the array given to us from the API, and apply (prepend) the GIFs and ratings to the HTML page
            for (let i = 0; i < response.data.length; i++) {
                var gifDiv = $("<div>");
                var p = $("<p>").text("Rating: " +response.data[i].rating);
                var gifImg = $("<img>");
                gifImg.attr("src", response.data[i].images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(gifImg);
                $("#gifs-div").prepend(gifDiv);
            }
        });
    });

    // Create another click function for the search button to apply another button for whatever GIFs you want to see
    $('#search').on("click", function () {
        var value = $("#searchvalue").val().trim();
        var newButton = ("<button class='gif-buttons' data-search=" + value + ">" + value + "</button>");
        $("#button-div").append(" " + newButton + " ");
    });
});

