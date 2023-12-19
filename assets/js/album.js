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
    artistImage.innerHTML = `<a href="artist-page.html?id=${data.artist.id}"><img class="rounded-circle" src="${data.artist.picture_small}" alt=""></a>`;
    artistName.innerHTML = `<a href="artist-page.html?id=${data.artist.id}">${data.artist.name}</a>`;
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
        

        <div class="row d-flex align-items-center fw-bold" id="tracciaPointer" onclick="populatePlayer(${element.id})">

        <div class="col-1">
        <small class="text-secondary" id="trackNum">${i}</small>
    </div>
    <div class="col-6">
        <small id="trackTitle">${element.title}</small>
        <br>

        <small style="font-size:12px;" class="fw-bold text-secondary" id="trackArtist">${element.artist.name}</small>

    </div>
    <div class="col-1">
        <small class="text-secondary" id="trackReprod">${element.id}</small>
    </div>
    <div class="col-1 offset-3">
        <small class="text-secondary" id="trackTime">${element.duration}
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