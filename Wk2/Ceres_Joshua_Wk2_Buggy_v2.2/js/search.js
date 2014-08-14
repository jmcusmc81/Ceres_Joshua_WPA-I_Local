/**
 Joshua Ceres
 Assignment: ANALYZE Buggy Search.v1: PWA1
 August 4-8 2014

 **/

// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)

    var resultsDIV = document.getElementById("results");      //variables not defined and do not have a semicolon...syntax error?
                                                            // Semicolon for what reason??

    // Validates search query
    searchInput = document.forms[0].search;               // var?? variables not defined and do not have a semicolon...syntax error?
		currentSearch = '';                                  // var?? no value after equal ( = ) sign just single quotation mark
    var validate = function(query){                        //Syntax error two equal signs, validate spelled wrong..Runtime error?

        // Trim whitespace from start and end of search query
        while(query.charAt(0) = " "){                               // no code to be run for "While Loop".
                                                                    /*
                                                                     while (condition) {
            //Wheres code??                                                     //code block to be executed
                                                                      }
                                                                    */
        };                                                         // Semicolon necessary? Should be a curly bracket " { "
        query = query.substring(1, query.length);
        while(query.charAt(query.length-1) === ""){
                  //wheres code?                                       //no code to be run for "While Loop"
        };                                                              //Semicolon not needed

        // Finds search matches
        // loop through each index of db array
        // each db[i] is a single video item, each title ends with a pipe "|"
        // save a lowercase variable of the video title

        // array to store matched results from database.js
        // (DO NOT FIX THE LINE DIRECTLY BELOW)
        query = query.substring(0, query.length-1);
                                                              // Semicolon for what reason??

		// Check search length, must have 3 characters

		if(query.length < 3){                                     //Search to make sure the User Input is less then 3
			alert("Your search query is too small, try again.");   // There should be closing quotation marks inside the parenthesis..Syntax error.
			searchInput.focus();
			return;                                                //return what?
        };

		search(query);                                              // Variable search defined somewhere??

	var search = function(query) {                                     //Curly Brackets?? Semicolon Needed??

        // split the user's search query string into an array
        var queryArray = string.split(" ");
        var results = [];                                                   //var results = curly brackets{} ??
    }
        for(var i=0, j=db.length; i<j; i++){

            var dbTitleEnd = db[i].indexOf('|');                            //Runtime error.   db.TitleEnd should be?
            var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);      //Runtime error. toLowerCase proper command line. db.item?

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            // Check that matches were found, and run output functions
            // The onsubmit event will be reviewed in upcoming Course Material.
            // THE LINE DIRECTLY BELOW IS CORRECT
            // return false is needed for most events - this will be reviewed in upcoming course material
            // THE LINE DIRECTLY BELOW IS CORRECT

            // Put matches into page as paragraphs with anchors

            // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
            // is the keyword anywhere in the video title?
            // If a match is found, push full db[i] into results array
            for(var ii=0, jj=queryArray.length; ii<jj; ii++){

				var qitem = queryArray[ii].tolowercase();                  //tolowercase runtime error, misspelled.
				var compare = dbitem.indexOf(qitem);                       // db.item? or meant to be dbItem?
                if(compare !== -1){
                    results.push(db[i]);
                };
			;                                                               //Semicolon? Syntax error

		;                                                                   //Semicolon? Syntax error

		results.sort();
                if(results.length = 0){
            noMatch();                                                      //Variable noMatch defined somewhere?
        }else{
            showMatches(results);                                           //Variable showMatches defined somewhere?
        };

	};
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;                                         //Semicolon? Syntax error
	};
	var showMatches = function(results){

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',
			title,
			url
		;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');                             //titleEnd Declared somewhere?
			title = results[i].subString(0, titleEnd);                      //I do not think subString is written correctly. Runtime error

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
            document.forms[0].onsubmit = function() {
                var query = searchInput.value;

                validqte(query);                                        //Runtime error. validate spelled wrong.
                return false;

	;                                                                   //Semicolon not needed.
    })();                                                               //Syntax error. Need a new line?
