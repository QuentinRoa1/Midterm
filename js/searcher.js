function searchLoader() {
    // get the cards related to the search
    // Get Podcast
    $.ajax({
        type: "GET",
        url: "https://jsonblob.com/api/jsonBlob/952471299104718848",
        contentType: "application/json",
        error: (xhr, status) => {
            // if the request fails, this function executes.
            //      xhr is the request sent and some info about the error
            //      status is usually a small string describing the error

            // This bit will be different on each page, but is a good placeholder
            alert("Cannot Access Data at this time. Please Try again later");
        },
        success: (podData) => {
            // First get podcast data
            console.log(podData);
            /* will return an array of objects formatted like like this:
                [
                    {
    "ID": 1,
    "uploaderID": 0,
    "DOI": "1234561234",
    "title": "This is a Test Article",
    "journal": "The Test Journal",
    "category": 0,
    "tags": [
      "Test",
      "Zamn",
      "Cool Kids"
    ],
    "filePlaceHolder": "File Man",
    "ratings": [
      [
        0,
        5
      ]
    ],
    "publishers": "me, myself, I",
    "pubDate": "3/17/2022"
  }
                ]
            */
            //
            var temp = []; // used to store temp array
            var temp2 = 0; // used to add to temp array
            let cardData = podData;
            let searchTerms = getAllUrlParams().terms;
            // for each card
            // for each term
            // Makes sure no there is a search term.
            if (searchTerms !== "") {
                // Goes through each card.
                cardData.forEach(element => {
                    // sets all checked to another variable that is all lowercase.
                    var title = element.title.toLowerCase();
                    var journal = element.journal.toLowerCase();
                    var publisher = element.publishers.toLowerCase();
                    // if and else if clauses to add the card to the temp array. 
                    if (element.ID == searchTerms) {
                        // puts the card into the temp array
                        temp[temp2] = element;
                        // iterates temp2
                        temp2++;
                    }
                    else if (element.DOI == searchTerms) {
                        // puts the card into the temp array
                        temp[temp2] = element;
                        // iterates temp2
                        temp2++;
                    }
                    else if (title.indexOf(searchTerms) !== -1) {
                        // puts the card into the temp array
                        temp[temp2] = element;
                        // iterates temp2
                        temp2++;
                    }
                    else if (journal.indexOf(searchTerms) !== -1) {
                        // puts the card into the temp array
                        temp[temp2] = element;
                        // iterates temp2
                        temp2++;
                    }
                    else if (publisher.indexOf(searchTerms) !== -1) {
                        // puts the card into the temp array
                        temp[temp2] = element;
                        // iterates temp2
                        temp2++;
                    }
                    else {
                        element.tags.forEach(ele => {
                            var tag = ele.toLowerCase();
                            if (tag.indexOf(searchTerms) !== -1) {
                                // puts the card into the temp array
                                temp[temp2] = element;
                                // iterates temp2
                                temp2++;
                            }
                        });
                    }
                });
                // sets cardData to temp
                cardData = temp;
            }
            // send the data to loadCard;

            loadcards(cardData);
        }
    });
}