function cardLoader(cardData){
    ///needs completion
}


//feedLoader takes cardDataArray as input and loops through it
function feedLoader(cardDataArray) {
    for (var card of cardDataArray) {
        //sends the specific data at "card" to cardLoader to create cards
        //Not sure if this is correct
        //$("#feed").append(cardLoader(cardData));
        cardLoader(card);
    }
}

function filter(podData, conditions) {
    var returnArray = [];
    for (var condition of conditions) {
        if (podData[condition] == conditions[condition]) {
            returnArray.push(podData[condition]); //returnArray.push(conditions[condition]);
        }
    }
}

//This function will need to be checked. Have a rough understanding of this process
function searchListener(eventObj) {
    //create array to be used for the url
    var URLArray = [];
    //empty variable for the URL string
    var queryString;
    //declare variable equal to the text of the search bar; "#searchbar" is a filler id
    //for the search bar
    var searchConditions = $(#searchbar).text();
    //for each character of searchConditions see whether it is a space or character.
    for (var char of searchConditions) {
        var searchString;
        //if the character is a space push the value of searchString to searchArray and
        //reset the value of searchString
        if (char.equals(" ") || char.equals(null)) {
            URLArray.push(searchString);
            searchString = null;
        }
        //if the character is anything besides a space add the character to searchString
        else {
            searchString.concat(char);
        }
    }
    //loops through URLArray to create the query string for the new URL
    for (var string of URLArray) {
        queryString.concat(string + "+");
    }
    //redirects user to search page
    location.href = "search.html?query=" + queryString;
}

function indexLoader() {
    $(document).ready(
        function() {
        //not sure if "#searchButton" is the search button id but it is filler for now
        $("#searchButton").searchListener("click");
        //creates podcast data array
        var podData = getPods();
        //Not sure if the indexLoader function is meant to do the data loading for the feed 
        //so I added this here just out of suspision it might be needed
        feedLoader(podData);
        //create search button and place it at the bottom of the feed
        var button = document.createElement("BUTTON");
        var text = document.createTextNode("Search");
        button.appendChild(text);
        //"#feed" is a placeholder for the id of the feed section
        document.#feed.appendChild(button);
    }
    //there is an error specificying the issue as not having "," here but that isn't the issue.
    //not sure what I've messed up here 
}

//This function for sure needs to be checked. 
function searcher(podData, searchTerms) {
    //create array for podcasts to be returned
    var returnArray = [];
    //set searchTerms to lowercase
    var lowerCaseSearch = searchTerms.toLowerCase(); 
    //create array of each term in searchTerm
    var searchTermsArray = [];
    //for each character in lowerCaseSearch
    for (var char of lowerCaseSearch) {
        //create a string variable
        var searchTermString;
        //if the character is a space push the set value of searchTermString to searchTermsArray
        if (char.equals(" ") || char.equals(null)) {
            searchTermsArray.push(searchTermString);
            //reset searchTermString to null
            searchTermString = null;
        }
        //if the character is anything besides a space add the character to searchTermString
        else {
            searchTermString.concat(char);
        } 
    }
    //for each podcast is podData
    for (var podcast of podData) {
        //set the title to lowercase
        var podTitle = podcast.***.toLowerCase();
        //set the category to lowercase
        var podCategory = podcast.***.toLowerCase();
        //set the tags to lowercase
        var podTags = podcast.***.toLowerCase();
        //for each term is searchTermsArray
        for (var term of searchTermsArray) {
            //loop through each character in podTitle to check each specific word of title
            for (var char of podTitle) {
                //create a string variable 
                var podTitleTerm;
                //if the character is a space or at the end of the string
                if (char.equals(" ") || char.equals(null)) {
                    //check if the podTitleTerm equals the term in searchTermsArray
                    if (podTitleTerm.equals(term)) {
                        //push the podcast to returnArray
                        returnArray.push(podcast);
                        //break out of the loop if a podcast has been sent to returnArray
                        //basically need to make sure that once a podcast has been added to
                        //returnArray then it is not added again. Not sure if this is how to do that
                        break;
                    }
                }
                //if the character is anything besides a space add the character to podTitleTerm
                else {
                    searchTermString.concat(char);
                } 
            }
            for (var char of podCategory) {
                //create a string variable 
                var podCategoryTerm;
                //if the character is a space or at the end of the string
                if (char.equals(" ") || char.equals(null)) {
                    //check if the podCategoryTerm equals the term in searchTermsArray
                    if (podCategoryTerm.equals(term)) {
                        //push the podcast to returnArray
                        returnArray.push(podcast);
                        //break out of the loop if a podcast has been sent to returnArray
                        //basically need to make sure that once a podcast has been added to
                        //returnArray then it is not added again. Not sure if this is how to do that
                        break;
                    }
                }
                //if the character is anything besides a space add the character to podCategoryTerm
                else {
                    searchTermString.concat(char);
                } 
            }
            for (var char of podTags) {
                //create a string variable 
                var podTagsTerm;
                //if the character is a space or at the end of the string
                if (char.equals(" ") || char.equals(null)) {
                    //check if the podTagsTerm equals the term in searchTermsArray
                    if (podTagsTerm.equals(term)) {
                        //push the podcast to returnArray
                        returnArray.push(podcast);
                        //break out of the loop if a podcast has been sent to returnArray
                        //basically need to make sure that once a podcast has been added to
                        //returnArray then it is not added again. Not sure if this is how to do that
                        break;
                    }
                }
                //if the character is anything besides a space add the character to podTagsTerm
                else {
                    searchTermString.concat(char);
                } 
            }
        }
    }
}

function searchLoader(query="all") {
    $(document).ready(function() {
        //not sure if "#searchButton" is the search button id but it is filler for now
        $("#searchButton").searchListener("click");
        //creates podcast data array
        var podData = getPods();
        if (query != "all") {
            podData = searcher(podData, query);
        }
        feedLoader(podData);
    }
    )
}

function authLoader(authID) {
    var podData = getPods();
    var podDataVar = filter(podDataVar, {author: authID})
    feedLoadeer(podDataVar);
}

function savedLoader(authID) {
    $(document).ready(function() {
        //needs completion
    })
}

