var searchString = document.getElementById("searchTxt").value;


function getRandomWiki(){
	//window.location.replace("https://en.wikipedia.org/wiki/Special:Random");
	window.location.href = "https://en.wikipedia.org/wiki/Special:Random";
}

function searchWiki(){
	var searchString = document.getElementById("searchTxt").value;
	var apiurl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + encodeURI(searchString) + "&srlimit=5&callback=?";
	var searchResultsHTML = '';
	console.log(searchString);

	$.getJSON(apiurl, function(data){
		console.log(data);
		searchResultsHTML += "<div class = 'results'>";
		searchResultsHTML += "<strong>" + data.query.search[0].title + "</strong><br>" + data.query.search[0].snippet;
		searchResultsHTML += "</div>";
		$('#searchResults').html(searchResultsHTML);
	} )

}
