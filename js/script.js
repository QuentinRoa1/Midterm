// can change names if you think it is confusing, not implemented yet.
// grabs array at index and loads into a card.
function loadcard(index){
    //needs work
    divcol=document.createElement("div");
    divcol.classList.add("col mb5");
    divcard=document.createElement("div");
    divcard.classList.add("card h-50");
    divbody=document.createElement("div");
    divbody.classList.add("card-body p-4");
    divcenter=document.createElement("div");
    divcenter.classList.add("text-center");
    title=document.createElement("h5");
    title.classList.add("fw-bolder");
    pname=document.createElement("p");
    divfooter=document.createElement("div");
    divfooter.classList.add("card-footer p-4 pt-0 border-top-0 bg-transparent");
    divcenter2=document.createElement("div");
    divcenter2.classList.add("text-center");
    Aplay=document.createElement("a");
    Aplay.classList.add("btn btn-outline-dark mt-auto mx-2");
    Asave=document.createElement("a");
    Asave.classList.add("btn btn-outline-dark mt-auto mx-2");
    text=document.createTextNode("Save")
    Asave.appendChild(text);
    text=document.createTextNode("Play")
    Aplay.appendChild(text); 
    divcenter2.appendChild(Asave);
    divcenter2.appendChild(Aplay); 
}
// uses loadcard() to load a specific number of cards, can change to load from newest by using length of array of arrays - i.
function loadcards(numOfCards){
    // should work once loadcard() is complete.
    for(i=0;i<numOfCards;i++){
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