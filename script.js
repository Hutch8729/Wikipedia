var searchString = document.getElementById("searchTxt").value;


function getRandomWiki(){
	//window.location.replace("https://en.wikipedia.org/wiki/Special:Random");
	window.location.href = "https://en.wikipedia.org/wiki/Special:Random";
}

function searchWiki(){
	var searchString = document.getElementById("searchTxt").value;
	var apiurl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + encodeURI(searchString) + "&srlimit=5&callback=?";
	var searchResultsHTML = '';
	var goToWikiBaseURL = 'https://en.wikipedia.org/wiki/';
	console.log(searchString);

	$.getJSON(apiurl, function(data){
		console.log(data);
		searchResultsHTML += "<div class = 'results' id='" + data.query.search[0].title + "'>";
		console.log(searchResultsHTML);
		searchResultsHTML += "<p><strong>" + data.query.search[0].title + "</strong><br>" + data.query.search[0].snippet + "</p>";
		searchResultsHTML += "</div>";
		$('#searchResults').html(searchResultsHTML);
		document.getElementById(data.query.search[0].title).addEventListener('click', function(){
			window.location.href = goToWikiBaseURL + data.query.search[0].title;
		});
	} )

}
