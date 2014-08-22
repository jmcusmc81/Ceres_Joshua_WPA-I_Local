//Joshua Ceres
//August 22 2014
// Debugging search.js
// Week 3
// Buggy Clean Look v. 3.0


(function() {
    var resultsDIV = document.getElementById("results"),    //You can just use a comma then Semicolon at the end of statement?
        searchInput = document.forms[0].search,                 //If I opus semicolon after line 11 the currentSearch turns purple.
        currentSearch = ''                                      //Code is nice and neat
        ;

    var validate = function (query) {                         // Changed to a single equal sign and spelled validate the right way

        while (query.charAt(0) === " ") {
            query = query.substring(1, query.length);
        }                                                          //No semicolon needed



        while (query.charAt(query.length - 1) === "") {
            query = query.substring(0, query.length - 1);
        }                                                           //No semicolon needed



        if (query.length < 3) {                                        //ALERTS user if the search input is to small
            alert("Your search query is too small, try again.");      // Added quotation mark to the end of the statement. It was missing.

            searchInput.focus();
            return;
        }


        search(query);
    };                                                              //Put Curly bracket here because sear(query); was coming up undefined

    var search = function (query) {                                 // Added a curly bracket
        var queryArray = query.split(" ");                          // Changed from query.join to query.split
        var results = [];
        for (var i = 0, j = db.length; i < j; i++) {
            var dbTitleEnd = db[i].indexOf('|');
            var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);       //tolowercase spelled wrong. Correction toLowerCase
                                                                     //No Semicolon needed and curly bracket no needed here


            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                var qitem = queryArray[ii].toLowerCase();                         //fixed to .toLowerCase()
                var compare = dbitem.indexOf(qitem);
                if (compare !== -1) {
                    results.push(db[i]);
                }                                                   //No semicolon needed

            }                                                       //No semicolon needed and added curly bracket

        }                                                           //Moved Curly bracket from line 45 to this line



    results.sort();

    if (results.length === 0) {                                     //Changed to triple equal signs
        noMatch();
    } else {
        showMatches(results);
    }

  };                                                            //This curly bracket closes the var search function on line 40
    var noMatch = function(){                                   //I initially forgot to copy this line of code over and had to go back
        var html = '' +                                         //and scan the first document that had no edits to find what I was missing
                '<p>No Results found.</p>'+
                '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
            ;
        resultsDIV.innerHTML = html;
    };

        var showMatches = function(results) {


            var html = '<p>Results</p>',
                title,
                url
                ;

            for (var i = 0, j = results.length; i < j; i++) {
                titleEnd = results[i].indexOf('|');
                title = results[i].substring(0, titleEnd);              //.substring is all lowercase

                url = results[i].substring(results[i].indexOf('|') + 1, results[i].length);

                html += '<p><a href=' + url + '>' + title + '</a></p>';
            }                                                           //No semicolon needed


            resultsDIV.innerHTML = html;
        };
            document.forms[0].onsubmit = function () {
                var query = searchInput.value;
                validate(query);                                        //validate spelled correctly
                return false;
            };                                                             //Added curly Bracket


})();                                                                   //This line of code closes the beginning function on line 9

/***                                    ----------Notes Wk3 Buggy v3------------

Moved a Curly bracket from line 45 to line 57. The results links were not coming up because of where the curly bracket was placed.
Changed .tolowercase() to its appropriate spelling which is .toLowerCase() on line 44 and 49. Fixed spelling of .subString() to all
lowercase on line 88. On line 63 added triple equal signs to result.length.
 ***/