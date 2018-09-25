var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8oRpogwv4c8vkFUetQ2qfgXpoW6s8k8K&q="+x+"";
var x = $("button").data("search");
var topics = []

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    var results = response.data
    console.log(results);


    $("button").on("click", function(){
        console.log(x);

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8oRpogwv4c8vkFUetQ2qfgXpoW6s8k8K&q=" + x + "";
        console.log(queryURL);

    });
    
//     for (let i = 0; i < results.length; i++){
//         var newDiv = $("<div>"),
//             button = $("<button>").text("Rating: " + results[i.rating]).append(newDiv)
//         newDiv.html(button)
//     }
});

    // This code below was from one of the activies, it relates heavily to this project


//     var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

//     // Function for displaying movie data
//     function renderButtons() {

//         // Deleting the movie buttons prior to adding new movie buttons
//         // (this is necessary otherwise we will have repeat buttons)
//         $("#movies-view").empty();

//         // Looping through the array of movies
//         for (var i = 0; i < movies.length; i++) {

//             // Then dynamicaly generating buttons for each movie in the array.
//             // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
//             var a = $("<button>");
//             // Adding a class
//             a.addClass("movie");
//             // Adding a data-attribute with a value of the movie at index i
//             a.attr("data-name", movies[i]);
//             // Providing the button's text with a value of the movie at index i
//             a.text(movies[i]);
//             // Adding the button to the HTML
//             $("#movies-view").append(a);
//         }
//     }

//     // This function handles events where one button is clicked
//     $("#add-movie").on("click", function (event) {
//         // event.preventDefault() prevents the form from trying to submit itself.
//         // We're using a form so that the user can hit enter instead of clicking the button if they want
//         event.preventDefault();

//         // This line will grab the text from the input box
//         var movie = $("#movie-input").val().trim();
//         // The movie from the textbox is then added to our array
//         movies.push(movie);

//         // calling renderButtons which handles the processing of our movie array
//         renderButtons();
//     });

//     // Calling the renderButtons function at least once to display the initial list of movies
//     renderButtons();
// });