/**
 * Created by Josh on 8/14/14.
 */
// Debugging search.js
// Week 2
// Buggy assignment v2.2


(function() {
    var resultsDIV = document.getElementById("results");    // Removed comma and added Semicolon
    searchInput = document.forms[0].search;                 // Removed comma and added Semicolon
    currentSearch = '';                                     // Added Semicolon

    var validate = function(query){                         // Changed to a single equal sign and spelled validate the right way

    while(query.charAt(0) = " "){



};

        query = query.substring(1, query.length);
        while(query.charAt(query.length-1) === ""){

        };

    query = query.substring(0, query.length-1);


    if(query.length < 3) {
      alert("Your search query is too small, try again.");      // Added quotation mark to the end of the statement. It was missing.
      searchInput.focus();
      return;
};
        search(query);

        var search = function(query){                       // Added a curly bracket
            var queryArray = string.split(" ");             // Changed from query.join to string.split
            var results = [];
            for(var i=0, j=db.length; i<j; i++){
                var dbTitleEnd = db[i].indexOf('|');
                var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);
            };

            for(var ii=0, jj=queryArray.length; ii<jj; ii++){
                var qitem = queryArray[ii].tolowercase();
                var compare = dbitem.indexOf(qitem);
                if(compare !== -1){
                    results.push(db[i]);
                };
            };

        };

    results.sort();
        if(results.length = 0){
            noMatch();
        }else{
            showMatches(results);
        };

