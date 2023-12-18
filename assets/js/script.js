const urlAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/'

const arrayId = [
        77201,
    142113722,
    915785,
    299821,
    50980792,
    10236282,
    75621062,
    445994175,
    185484062,
    112190262
]



window.onload = () => {
    contenitoreTop()
    contenitorePlaylist()
    creareCardBottom()
}


/* ----------------------------------------  HOME PAGE */

function contenitoreTop(){

    let numCasual = Math.floor(Math.random()*arrayId.length)

    fetch(urlAlbum + arrayId[numCasual])
    .then(response => response.json())
    .then(data => {
      console.log(data.tracks.data);
      createAlbumTop(data.tracks.data)
    })
    
}
function createAlbumTop(data){
    let numCasualDellArray = Math.floor(Math.random()*data.length)
    console.log(numCasualDellArray);

    let container = document.getElementById('contenitoreTop')
    let card = document.createElement('div')
    card.classList.add('col', 'border', 'border-0')
    card.innerHTML = `
    <div class="card mb-3 bg-dark p-2 w-100 border border-0" style="background: rgb(0,0,0);
    background: linear-gradient(9deg, rgba(0,0,0,1) 9%, rgba(38,38,38,0) 100%);">
    <div class="row g-0 w-100">
      <div class="col-3">
        <img class="p-2 img-fluid" src="${data[numCasualDellArray].album.cover_medium}" class="card-img-top" alt="${data[numCasualDellArray].artist.name}" style="width:100%; height:100%;">
      </div>
      <div class="col-md-8">
        <div class="card-body text-light">
          <div class="d-flex justify-content-between mb-3">
            <small class="">ALBUM</small>
            <small class="btn btn-sm btn-dark text-secondary ">NASCONDI ANNUNCI</small>
          </div>
          <h3 class="card-title">${data[numCasualDellArray].title}</h3>
          <p class="card-text"><small>${data[numCasualDellArray].artist.name}</small></p>
          <p class="card-text">Ascolta il nuovo singolo di ${data[numCasualDellArray].artist.name}</p>
          <div class="d-flex align-items-center gap-3">
            <a href="#" class="btn btn-success text-black rounded-pill btn-lg">Play</a>
            <a href="#" class="btn btn-outline-light rounded-pill btn-lg">Save</a>
            <i class="bi fs-2 bi-three-dots"></i>
          </div>
        </div>
      </div>
    </div>
  </div>`

    container.appendChild(card)
}



function contenitorePlaylist(){
    for(i = 0; i < 6; i++){
        fetch(urlAlbum + arrayId[i])
        .then(response => response.json())
        .then(data => {createAlbumPlaylist(data)})
    }   
}
function createAlbumPlaylist(data){
    let container = document.getElementById('contenitorePlaylist')
    let card = document.createElement('div')
    card.classList.add('col-4')
    card.innerHTML = `
    <div class="card mb-3 bg-dark" style="max-width: 540px;">
    <div class="row g-0">
      <a class="row g-0" href="./album-page.html?id=${data.id}">
        <div class="col-4">
          <img class="img-fluid" src="${data.cover}" class="card-img-top" alt="${data.artist.name}">
        </div>
        <div class="col-6">
          <div class="card-body h-100 d-flex align-items-center">
            <h5 class="card-title text-light" style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">${data.title}</h5>
          </div>
        </div>
      </a>
    </div>
  </div>`

    container.appendChild(card)
}



function creareCardBottom(){
    arrayId.forEach((el)=> {
        fetch(urlAlbum + el)
        .then(response => response.json())
        .then(data => {createAlbum(data)})
    })
}
function createAlbum(data){
    let container = document.getElementById('contenitoreBottom')
    let card = document.createElement('div')
    card.classList.add('col-2', 'mb-4', 'mx-1')
    card.innerHTML = `
                    <div class="card bg-dark">
                        <a href="./album-page.html?id=${data.id}"><img class="p-3 card-img-top" src="${data.cover}" alt="${data.artist.name}"></a>
                        <div class="card-body text-light">
                          <a href="./album-page.html?id=${data.id}"><h5 class="card-title" style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">${data.title}</h5></a>
                          <a href="artist-page.html?id=${data.artist.id}"><p class="card-text" style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">${data.artist.name}</p></a>
                        </div>
                      </div>`

    container.appendChild(card)
}

/* ---------------------------------------- HOME PAGE */


/*
let artist = 'ligabue';
/*
arrayId.forEach((element)=> {
        fetch(urlAlbum + arrayId.indexOf(element))
        .then(response => response.json())
        .then(data => {
             console.log(data);
             populateHomePage(data);
        }
        )
})

fetch(urlAlbum + artist)
        .then(response => response.json())
        .then(data => {
             console.log(data);
             populateHomePage(data);
        })

function populateHomePage(data) {

        console.log(data[0]);
        
        const cards = document.getElementById('cards');
        cards.innerHTML = '';
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        cardDiv.innerHTML += `
        <img src="${data.picture_medium}" alt="">
        <h3>${data.title}</h3>
        <p>${data.artist.name}</p>
        `
        cards.appendChild(cardDiv);
}

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

