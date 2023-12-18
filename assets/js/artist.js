const urlAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/artist/'

window.onload = () => {
    const getData = new URLSearchParams(location.search);

    const id = getData.get('id');

    console.log(id);
    getArtistData(id)
getTop5(id)


    
}
function getArtistData(id){
    fetch(urlAlbum + id)
    .then(response => response.json())
    .then(data => {
         console.log(data);
         getArtistImage(data);

    })
}

function getArtistImage(data) {
   let banner = document.getElementById('artistBanner');
   banner.style.backgroundImage = `url(${data.picture_xl})`
   let artistName = document.getElementById('artistName');
   artistName.innerText = data.name
   let ascoltatori = document.getElementById('listener');
   ascoltatori.innerText = data.nb_fan;
}

function getTop5(id){
    fetch(urlAlbum + id + "/top?limit=5")
    .then(response => response.json())
    .then(data => {
         console.log(data);
         populateArtistTop(data.data);
    })
}


function populateArtistTop(el) {
    let i = 1;
    el.forEach((element)=> {
        let myRow = document.createElement('div');
        myRow.classList.add('row');
        let trackRow = document.getElementById('top');
        myRow.innerHTML = `
        
        <div class="row">
        <div class="col-1">
        <small id="trackNum">${i}</small>
    </div>
    <div class="col-1">
        <img src="${element.album.cover_small}" />
    </div>
    <div class="col-5">
        <small id="trackTitle">${element.title}</small>
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

