var topics = []


$('.gif-buttons').on("click", function(){
    var x = $(this).data("search");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=8oRpogwv4c8vkFUetQ2qfgXpoW6s8k8K&limit=10";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        console.log(results[0].rating);
        for (let i = 0; i < results.length; i++) {
            $("#gif-div").prepend("<p>Rating: " + results[i].rating + "</p>");
            $("#gif-div").prepend("<img src='" + results[i].images.downsized.url + "'>")
        }
    });
});

$('#search').on("click", function () {
    var value = $("#searchvalue").val().trim();
    var newButton = ("<button class='gif-buttons' data-search=" + value + ">" + value + "</button>")
    $("#buttondiv").append(" " + newButton + " ");
});



