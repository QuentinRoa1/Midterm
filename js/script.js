// can change names if you think it is confusing, not implemented yet.
// grabs array at index and loads into a card.
const array=[{podtitle:"Hello", podcastID:"0",authorName:"Berry"},{podtitle:"Hello", podcastID:"0",authorName:"Berry"}];
const userID="3";
const page=0;
function loadcard(i){
    //needs work
    var divcol=document.createElement('div');
    divcol.classList.add("col","mb5","border","rounded","m-2");
    var divcard=document.createElement('div');
    divcard.classList.add("card", "h-50","border-0");
    var divbody=document.createElement('div','border-0');
    divbody.classList.add("card-body", "p-4");
    var divcenter=document.createElement('div');
    divcenter.classList.add("text-center");
    var title=document.createElement('h5');
    title.classList.add("fw-bolder");
    var pname=document.createElement('p');
    var divfooter=document.createElement('div');
    divfooter.classList.add("card-footer","p-4", "pt-0", "border-top-0", "bg-transparent");
    var divcenter2=document.createElement('div');
    divcenter2.classList.add("text-center");
    var Asave=document.createElement('a');
    Asave.classList=("btn btn-outline-dark mt-auto mx-2");
    var Aplay=document.createElement('a');
    Aplay.classList=("btn btn-outline-dark mt-auto mx-2");
    //page is acting as users homepage, can be changed. passing userID as user and podcastID as cast to be caught and added to the users saved podcast array.
    Asave.textContent='Save';
    Aplay.textContent='Play';
    //play is being used as the podcast page, can be changed. podcastID as cast being passed to be caught and used to load the podcast. 
    divcenter2.append(Asave);
    divcenter2.appendChild(Aplay); 
    divfooter.append(divcenter2);
    pname.textContent=array[i].authorName;
    title.textContent=array[i].podtitle;
    divcenter.append(title);
    divcenter.append(pname);
    divbody.append(divcenter);
    divcard.append(divbody);
    divcard.append(divfooter);
    divcol.append(divcard);
    // should put in the right place in the document.
    var put=document.getElementById('cards-here');
    put.append(divcol);
}
// uses loadcard() to load a specific number of cards, can change to load from newest by using length of array of arrays - i-page*numOfCards.
function loadcards(numOfCards){
    // should work once loadcard() is complete.
    for(var i=0;i<numOfCards;i++){
        var temp=numOfCards-i-1;
        console.log(i);
        loadcard(i);
    }
}
/*
what load card needs to do with info from json blob.

                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- podcast name-->
                                <h5 class="fw-bolder">${title}</h5>
                                <!-- author-->
                                ${name}
                            </div>
                        </div>
                        <!-- podcast actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="${userID}">save</a>
                            <a class="btn btn-outline-dark mt-auto" href="${podcastID}">play</a></div>
                        </div>
                    </div>
                </div>
*/
