function getRandomWiki(){
	window.location.href = "https://en.wikipedia.org/wiki/Special:Random";
}

function searchWiki(){
	var searchString = document.getElementById("searchTxt").value;
	var apiurl = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + encodeURI(searchString) + "&callback=?";
	var searchResultsHTML = '';

	$.getJSON(apiurl, function(data){
		var arr = data.query.search;
		var goToWikiBaseURL = 'https://en.wikipedia.org/wiki/';
		var listArr = [];
		for(i=0; i < arr.length; i++){
			listArr.push(data.query.search[i].title);
			searchResultsHTML += "<div class = 'results' id='" + i + "'>";
			searchResultsHTML += "<p><strong>" + data.query.search[i].title + "</strong><br>" + data.query.search[i].snippet + "</p>";
			searchResultsHTML += "</div>";
			$('#searchResults').html(searchResultsHTML);
		}
		$('#searchResults').on('click', '.results', this.id, function(){
				window.location.href = goToWikiBaseURL + encodeURI(listArr[this.id]);
			});
	} )
}
