const urlAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/'

const urlTrack = 'https://striveschool-api.herokuapp.com/api/deezer/track/'

window.onload = () => {
    const getData = new URLSearchParams(location.search);

    const id = getData.get('id');

    console.log(id);

    getAlbumData(id);
    getTracklistData(id);
    
}

function getAlbumData(id){
    fetch(urlAlbum + id)
    .then(response => response.json())
    .then(data => {
         console.log(data);
         populateAlbumBanner(data);
    })
}

function getTracklistData(id){
    fetch(urlAlbum + id)
   .then(response => response.json())
   .then(data => {
    console.log(data.tracks.data);
    populateAlbumTracklist(data.tracks.data);
   })
}



function populateAlbumBanner(data) {
    let albumImage = document.getElementById('albumImage');
    let albumTitle = document.getElementById('albumTitle');
    let artistImage = document.getElementById('artistImage');
    let artistName = document.getElementById('artistName');
    let albumYear = document.getElementById('albumYear');
    let tracksNum = document.getElementById('tracksNum');
    let albumTime = document.getElementById('albumTime');
    let albumGradient = document.getElementById('albumGradient');

    albumImage.innerHTML = `<img class="shadow" src="${data.cover_medium}" alt="">`;
    albumTitle.innerHTML = `${data.title}`;
    artistImage.innerHTML = `<img class="rounded-circle" src="${data.artist.picture_small}" alt="">`;
    artistName.innerHTML = `${data.artist.name}`;
    albumYear.innerHTML = `${data.release_date}`;
    tracksNum.innerHTML = `${data.nb_tracks}`;
    albumTime.innerHTML = `${data.duration}`;
    albumGradient.style.backgroundImage = `url(${data.cover_xl})`

}
     

function populateAlbumTracklist(el) {
    let i = 1;
    el.forEach((element)=> {
        let myRow = document.createElement('div');
        myRow.classList.add('row');
        let trackRow = document.getElementById('trackRow');
        myRow.innerHTML = `
        
        <div class="row d-flex align-items-center" id="tracciaPointer" onclick="populatePlayer(${element.id})">
        <div class="col-1">
        <small id="trackNum">${i}</small>
    </div>
    <div class="col-6">
        <small id="trackTitle">${element.title}</small>
        <br>
        <small style="font-size:12px" id="trackArtist">${element.artist.name}</small>
    </div>
    <div class="col-1">
        <small id="trackReprod">${element.id}</small>
    </div>
    <div class="col-1 offset-3">
        <small id="trackTime">${element.duration}
        </small>
    </div>
        </div>


        `;

        trackRow.appendChild(myRow);
       i++
    })

    
}


function populatePlayer (element) {
    fetch(urlTrack + element)
    .then(response => response.json())
    .then(data => {console.log(data)
    
     let image = document.getElementById("playerImage");
    let title = document.getElementById("playerTitle");
    let artist = document.getElementById("playerArtist");

    image.setAttribute("src", `${data.album.cover_small}`);
    title.innerHTML = `${data.title}`;
    artist.innerHTML = `${data.artist.name}`;

    title.classList.add("titleFont");
    artist.classList.add("artistFont");
    image.classList.add("imageFont");
    
    
    })

    console.log(element)
    

   
}








// <div id="trackRow" class="row">

// <div class="col-1">
//     <small id="trackNum">1</small>
// </div>
// <div class="col-6">
//     <small id="trackTitle">kkjdjahdkajdhsdf</small>
//     <br>
//     <small id="trackArtist">affwfwf</small>
// </div>
// <div class="col-1">
//     <small id="trackReprod">3225252</small>
// </div>
// <div class="col-1 offset-3">
//     <small id="trackTime">
//         1:24
//     </small>
// </div>

// </div>



// <div id="albumImage" class="col-3"></div>
// <div id="albumBanner" class="col-9">
//     <small>ALBUM</small>
//     <h1 id="albumTitle"></h1>
//    <div class="d-flex">
//         <div class="rounded-circle" id="artistImage"></div>
//         <small id="artistName"></small>
//         <small id="albumYear"></small>
//         <small id="tracksNum"></small>
//         <small id="albumTime" class="text-secondary"></small>
//    </div>
// </div>



// <div class="row">

// <div class="col-1">
//     <small>1</small>
// </div>
// <div class="col-6">
//     <small>kkjdjahdkajdhsdf</small>
//     <br>
//     <small>affwfwf</small>
// </div>
// <div class="col-1">
//     <small>3225252</small>
// </div>
// <div class="col-1 offset-3">
//     <small>
//         1:24
//     </small>
// </div>

// </div>