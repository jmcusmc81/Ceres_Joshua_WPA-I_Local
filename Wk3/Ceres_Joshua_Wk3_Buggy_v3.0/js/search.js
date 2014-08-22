//Joshua Ceres
//Week 3 Buggy v 3.0
//August 22 2014
//PWA-1


// Create privatized scope using a self-executing function
(function() {

    // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)

    var resultsDIV = document.getElementById("results"),
                                                                    //variables not defined and do not have a semicolon...syntax error?
    searchInput = document.forms[0].search,                         // var?? variables not defined and do not have a semicolon...syntax error?\
    currentSearch = ''                                                  //---Week 2--- cleaned up lines of code and made it more organized.
;

    var validate = function(query) {                                     //---Week 2---Removed an equal sign and spelled validate proper way

        // Trim whitespace from start and end of search query
        while (query.charAt(0) === " ") {                               //---Week 2--- fixed code , it was placed outside the while loop
            query = query.substring(1, query.length);                   //---Week 2--- added triple equal to query/charAt
        }                                                               //---Week 2 added Bracket and removed semi colon


        while (query.charAt(query.length - 1) === "") {
            query = query.substring(0, query.length - 1);
        }                                                               //---Week 2---Removed semicolon


            // Finds search matches
            // loop through each index of db array
            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title

            // array to store matched results from database.js
            // (DO NOT FIX THE LINE DIRECTLY BELOW)

            // Semicolon for what reason??

            // Check search length, must have 3 characters

            if (query.length < 3) {                                      //Search to make sure the User Input is less then 3
                alert("Your search query is too small, try again.");     //---Week 2--- added quotation mark at the end of statement
                searchInput.focus();
                return;                                                 
            }



            search(query);
        };                                                                         //--Week 2-- Closes var validate function

        // Variable search defined somewhere??

        var search = function (query) {                                           // --Week 2-- Inserted Curly Brackets

            // split the user's search query string into an array
            var queryArray = query.split(" ");                                    // ---Week 2 --- Changed from query.join to query.split
            var results = [];
            for (var i = 0, j = db.length; i < j; i++) {
                var dbTitleEnd = db[i].indexOf('|');                                //--Week 2--- Organized and cleaned up
                var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);      //---Week 3--- Changed toLoweCase()
            }                                                                       //--Week 2--- Removed Semicolon
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
                for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {

                    var qitem = queryArray[ii].toLowerCase();                   //---Week 3---Changed toLowerCase()
                    var compare = dbitem.indexOf(qitem);                       // db.item? or meant to be dbItem?

                    if (compare !== -1) {
                        results.push(db[i]);
                    }


                }





            results.sort();                                                     //--Week 2--Cleaned up

            if (results.length === 0) {                                           //--Week 3---Changed to triple equal sings
                noMatch();                                                      //Variable noMatch defined somewhere?
            } else {
                showMatches(results);                                           //Variable showMatches defined somewhere?
            }


        };                                                                      //---Week 2--- Closes var search function


        var noMatch = function () {
            var html = '' +
                    '<p>No Results found.</p>' +
                    '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
                ;
            resultsDIV.innerHTML = html;
        };

        var showMatches = function (results) {

            // THE NEXT 4 LINES ARE CORRECT.
            var html = '<p>Results</p>',                                          //--Week 2--- Cleaned up
                title,
                url
                ;


            // loop through all the results search() function
            for (var i = 0, j = results.length; i < j; i++) {

                // title of video ends with pipe
                // pull the title's string using index numbers
                titleEnd = results[i].indexOf('|');                             //titleEnd Declared somewhere?
                                                                                //--WEEK 3---Fixed.substring
                title = results[i].substring(0, titleEnd);                      //I do not think subString is written correctly. Runtime error

                // pull the video url after the title
                url = results[i].substring(results[i].indexOf('|') + 1, results[i].length);

                // make the video link - THE NEXT LINE IS CORRECT.
                html += '<p><a href=' + url + '>' + title + '</a></p>';
            }


            resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
        };                                                                          //---Week 2---Closes var showMatches function

            document.forms[0].onsubmit = function () {
            var query = searchInput.value;

            validate(query);                                          //--Week 2---Spelled validate correctly
            return false;


        };                                                             //---Week 2--- Added Curly brace

                                                                   //---Week 2 ---Added curly brace and semicolon

})();                                                               //---Week 2--- Closes entire function



//I have added a second debug copy with less comments and a cleaner look to the coding.
