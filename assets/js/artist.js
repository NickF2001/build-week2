const urlAlbum = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

const urlTrack = 'https://striveschool-api.herokuapp.com/api/deezer/track/';

window.onload = () => {
  const getData = new URLSearchParams(location.search);

  const id = getData.get("id");
  console.log(id);
  if (id===null){
    console.log(id)
    let body=document.querySelector('.main')
    let vuoto = document.createElement('div')
    vuoto.innerHTML= `<h2 class="text-white text-center">Non fare il furbo passa dalla <a href="./index.html">HOME</a></h2>`
    vuoto.style.width= "100vw"
    vuoto.style.height="100vh"
    vuoto.style.backgroundColor= "rgb(0 0 0 / 80%)"
    vuoto.style.zIndex="999"
    vuoto.style.position = 'absolute'
    vuoto.style.paddingTop = '45vh'
    body.appendChild(vuoto)
} else{

  getArtistData(id);
  getTop5(id);
}
}
function getArtistData(id) {
  fetch(urlAlbum + id)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      getArtistImage(data);
      getLikedTracks(data);
    });
}

function getArtistImage(data) {
  let banner = document.getElementById("totalContainer");
  banner.style.backgroundImage = `url(${data.picture_xl})`;
  let artistName = document.getElementById("artistName");
  artistName.innerText = data.name;
  let ascoltatori = document.getElementById("listener");
  ascoltatori.innerText = data.nb_fan;
}

function getTop5(id) {
  fetch(urlAlbum + id + "/top?limit=5")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      populateArtistTop(data.data);
    });
}

function populateArtistTop(el) {
  let i = 1;
  el.forEach((element) => {
    let myRow = document.createElement("div");
    myRow.classList.add("row");
    let trackRow = document.getElementById("top");
    myRow.innerHTML = `
        
        <div class="row d-flex align-items-center mb-2" onclick="populatePlayer(${element.id})">
        <div class="col-1 text-end">
        <small id="trackNum">${i}</small>
    </div>
    <div class="col-1">
    <a href="#"><img class="top5Images" src="${element.album.cover_small}" /></a>
    </div>
    <div class="col-6">
    <a href="#"><small id="trackTitle">${element.title}</small></a>
    </div>
    <div class="col-1">
    <a href="#"><small id="trackReprod">${element.id}</small></a>
    </div>
    <div class="col-1 offset-2">
    <a href="#"><small id="trackTime">${element.duration}</small></a>
    </div>
        </div>


        `;

    trackRow.appendChild(myRow);
    i++;
  });
}

function getLikedTracks(el) {
  let liked = document.getElementById("myLiked");
  liked.innerHTML = `
    <div class="row d-none d-sm-flex align-items-center">
    <div class="col-2">
    <a href="#"><img class="top5Images rounded-circle" src="${el.picture_small}" /></a>
    </div>
    <div class="col-10 d-flex flex-column">
    <small class="fw-bold">Hai messo mi piace a 11 brani</small>
    <a href="#"><small class="fw-bold text-secondary">di ${el.name}</small></a>
    </div>
        </div>
    `;
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