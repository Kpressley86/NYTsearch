$(document).ready(function () {


   
    // var numRecord = 1,5,10;         // id# numRecords
    var startYear = "19950110";       // id# startYears
    var endYear = "20111010";        // id# endYears


    function searchForNews(news) {

        var apiKey = "QDzGqfGGE5zww8ffy7tJbwUhXTMaaoxE"
        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=${apiKey}&q=${news}&end_date${endYear}&start_date=${startYear}&sort=relevance`;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);

            var newsHeadline = $("<h2>").text(response.response.docs[0].headline.main);
            var newsAuthor = $("<h3>").text(response.response.docs[0].byline.original);
            var docType = $("<h3>").text(response.response.docs[0].document_type);
            var pubDate = $("<h3>").text(response.response.docs[0].pub_date);
            var newURL = $("<h3>").text(response.response.docs[0].web_url);

            $("#newsDiv").empty();
            $("#newsDiv").append(newsHeadline, newsAuthor, docType, pubDate, newURL);

        });
    }

    
  $("#searchBtn").on("click", function (event) {
    
    event.preventDefault();
    
    var inputNews = $("#searchTerms").val().trim();
    var inputStart = $("#startYears").val().trim();
    var inputEnd = $("#endYears").val().trim();

    searchForNews(inputNews);
  });

});
