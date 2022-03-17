// can change names if you think it is confusing, not implemented yet.
// grabs array at index and loads into a card.
// Get Podcast from Dylan.
function ajaxStuff(){
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
        loadcards(podData);
        /* will return an array of objects formatted like like this:
            [
                {
                    "ID: : 1,
                    "DOI": "1234561234",
                    "fName": "Dylan",
                    "lName": "Gaines",
                    "email": "gainesd2@nku.edu",
                    "title": "This is a Test Article",
                    "journal": "The Test Journal",
                    "category": 0,
                    "tags": ["Test", "Zamn", "Cool Kids"],
                    "filePlaceHolder": "File Man",
                    "ratings": [[0, 5], [1,4]]
                }
            ]
        */
        // Once the podcast data is retrieved, you'll probably have to cross reference it with the category data, so get that as well
        $.ajax({
            type: "GET",
            url: "https://jsonblob.com/api/jsonBlob/952473694085857280",
            contentType: "application/json",
            error: (xhr, status) => {
                // if the request fails, this function executes.
                //      xhr is the request sent and some info about the error
                //      status is usually a small string describing the error

                // This bit will be different on each page, but is a good placeholder
                alert("Cannot Access Data at this time. Please Try again later");
            },
            success: (categData) => {
                // if the request succeeds, this function executes

                // for now, just log the data
                // Within THIS is where you append article info to the page
                // to access the category name and description
                // returns the object containing the info on the relevant category
                //     e.g. {name= "Sports", desc="description of sports"}
            }
        });
    }
});
}
//Quentin
function loadcard(aarray) {
    //Sets up outer most div.
    var divcard = document.createElement('div');
    divcard.classList = "card align-self-center pt-2 mb-2";
    //Sets up div body.
    var divbody = document.createElement('div');
    divbody.classList.add("card-body");
    //Sets up title of podcast.
    var title = document.createElement('h4');
    title.classList = "px-2 card-title";
    //Sets up names of authors. 
    var pname = document.createElement('div');
    pname.classList = "fs-6 px-2 card-text";
    //Sets up journal name.
    var journal = document.createElement('div');
    journal.classList = "fs-6 px-2 card-text";
    //Sets up doi div.
    var doi = document.createElement('div');
    doi.classList = "fs-6 px-2 card-text";
    //Sets up publication date div.
    var publication = document.createElement('div');
    publication.classList = "fs-6 px-2 card-text";
    //Sets up div for play button.
    var divblack = document.createElement('div');
    divblack.classList = "bg-black px-4 pt-2";
    // sets up div for info.
    var divinfo = document.createElement('div');
    divinfo.classList = "info";
    //Sets up play button.
    var btnplay = document.createElement('button');
    btnplay.classList = ("bi bi-play-fill btn p-0 text-white");
    //Sets up span to hold the title of the podcast.
    var spantitle = document.createElement('span');
    spantitle.classList = ("text-white ps-2 py-2");
    //Adds text to span.
    spantitle.textContent = aarray.title;
    //Makes smalls that hold the date and authors.
    small1 = document.createElement('small');
    small2 = document.createElement('small');
    small1.classList = "text-secondary py-2";
    small2.classList = "text-secondary py-2";
    //white block taht holds time.
    hrthing = document.createElement('hr');
    //small that holds a fake timer
    var smalltime=document.createElement('small');
    smalltime.classList = "text-secondary";
    hrthing.classList = "bg-white mt-0";
    smalltime.textContent = "0:00/20:00";
    //sets text content.
    small1.textContent = aarray.publishers;
    small2.textContent = aarray.pubDate;
    pname.textContent = aarray.publishers;
    journal.textContent = aarray.journal;
    publication.textContent = aarray.pubDate;
    doi.textContent = aarray.DOI;
    title.textContent = aarray.journal;
    //Appends everything.
    divbody.append(title, pname, journal, publication, doi);
    divinfo.append(btnplay, spantitle, small1, small2);
    divblack.append(divinfo);
    divcard.append(divbody, divblack, smalltime, hrthing);

    // should put in the right place in the document.
    var put = document.getElementById('cards-here');
    put.append(divcard);
}
function loadcards(array) {
    // Loads all cards
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
        loadcard(array[i]);
    }
}
/*
Dylans card template

<div id="templateCard" class="card align-self-center pt-2" hidden>
            <div class="card-body">
                <h4 id="titleMan" class="px-2 card-title">Test Title</h4>
                <div id="authors" class="fs-6 px-2 card-text">Sanders,gj, boos b, rhodes</div>
                <div id="journal" class="fs-6 px-2 card-text">test journal</div>
                <div id="year" class="fs-6 px-2 card-text">2018</div>
                <div id="doi" class="fs-6 px-2 card-text">132571435487</div>
            </div>
            <div class="bg-black px-4 pt-2">
                <div class="info">
                    <button id="playBoy" class="bi bi-play-fill btn p-0 text-white"></button>
                    <span id="titleBoy" class="text-white ps-2">Test Title</span>
                    <small id="authBoy" class="text-secondary">Sanders,gj, boos b, rhodes</small>
                    <small id="yearBoy" class="text-secondary">(2018)</small>
                </div>
                <!--fake timer-->
                <small id="timeBoy" class="text-secondary">0:00/20:00</small>
                <!--fake play bar-->
                <hr class="bg-white mt-0">
            </div>
        </div>
*/