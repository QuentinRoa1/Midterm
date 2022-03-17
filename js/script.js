// can change names if you think it is confusing, not implemented yet.
// grabs array at index and loads into a card.
const array=[{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983},{podtitle:"Hello", podcastID:"0",authorName:"Berry",date:2121,journalname:"something",index:667324983}];
const userID="3";
const page=0;
function loadcard(i){
    //needs work
    var divcard=document.createElement('div');
    divcard.classList="card align-self-center pt-2 mb-2";
    var divbody=document.createElement('div');
    divbody.classList.add("card-body");
    var title=document.createElement('h4');
    title.classList="px-2 card-title";
    var pname=document.createElement('div');
    pname.classList="fs-6 px-2 card-text";
    var journal=document.createElement('div');
    journal.classList="fs-6 px-2 card-text";
    var doi=document.createElement('div');
    doi.classList="fs-6 px-2 card-text";
    var publication=document.createElement('div');
    publication.classList="fs-6 px-2 card-text";
    var divblack=document.createElement('div');
    divblack.classList="bg-black px-4 pt-2";
    var divinfo=document.createElement('div');
    divinfo.classList="info";
    var btnplay=document.createElement('button');
    btnplay.classList=("bi bi-play-fill btn p-0 text-white");
    var spantitle=document.createElement('span');
    spantitle.classList=("text-white ps-2 py-2");
    spantitle.textContent=array[i].podtitle;
    small1=document.createElement('small');
    small2=document.createElement('small');
    small1.classList="text-secondary py-2";
    small2.classList="text-secondary py-2";
    smalltime=document.createElement('small');
    hrthing=document.createElement('hr');
    smalltime.classList="text-secondary";
    hrthing.classList="bg-white mt-0";
    smalltime.textContent="0:00/20:00";
    small1.textContent=array[i].authorName;
    small2.textContent=array[i].date;
    pname.textContent=array[i].authorName;
    journal.textContent=array[i].journalname;
    publication.textContent=array[i].date;
    doi.textContent=array[i].index;
    title.textContent=array[i].podtitle;
    divbody.append(title, pname,journal,publication,doi);
    divinfo.append(btnplay,spantitle,small1,small2);
    divblack.append(divinfo);
    divcard.append(divbody,divblack,smalltime,hrthing);

    // should put in the right place in the document.
    var put=document.getElementById('cards-here');
    put.append(divcard);
}
// uses loadcard() to load a specific number of cards, can change to load from newest by using length of array of arrays - i-page*numOfCards.
function loadcards(numOfCards){
    // should work once loadcard() is complete.
    for(var i=0;i<numOfCards;i++){
        var temp=numOfCards-i-1;
        console.lo
        loadcard(i);
    }
}
/*
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
