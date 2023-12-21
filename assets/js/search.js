const urlSearch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const urlTrack = 'https://striveschool-api.herokuapp.com/api/deezer/track/';

let input = document.getElementById("input");
let button = document.getElementById("button");



function search() {
    
    input.addEventListener("keypress", (e) => {
    
        if (e.key === "Enter") {
            e.preventDefault();
            fetchData(input.value.replace(/\s+/g, ''));
            input.value="";
          
    }})
}


search()
let searchArray;

function fetchData(element) {


    fetch(urlSearch + element)
    .then(response => response.json())
    .then(data => {
        
        console.log(data); 
        searchArray = data.data;
        populateSearch(searchArray)
       
        console.log(searchArray);
        searchArray.forEach((element) => {
            console.log(element)
        })
    })
}
  let container = document.getElementById('searchContainer')
  let failedMessage = document.getElementById('failed');
 function populateSearch(el) {
     failedMessage.innerHTML = '';
    if (el.length === 0) {
        
   
        failedMessage.innerText = "La tua ricerca non ha prodotto risultati!";
        
     } else {
        container.innerHTML = "";
  
     el.forEach((element) => {
 console.log(element)
 
   

     let card = document.createElement('div')
     card.classList.add('col-12', 'col-md-6')
     card.innerHTML = `
     <div class="card mb-3 bg-dark" style="max-width: 540px;">
     <div class="row g-0">
       
         <div class="col-4">
           <img class="img-fluid" src="${element.album.cover_medium}" class="card-img-top" alt="${element.artist.name}">
         </div>
         <div class="col-6">
           <div class="card-body h-100 d-flex align-items-center">
             <h5 class="card-title text-light" style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">${element.title}</h5>
           </div>
         </div>
     </div>
   </div>`

     container.appendChild(card)
     

     }
     ) 
     }
    container.innerHTML = "";
  
     el.forEach((element) => {
 console.log(element)
 
   

     let card = document.createElement('div')
     card.classList.add('col-12', 'col-md-6')
     card.setAttribute('onclick', `populatePlayer(${element.id})`)
     card.innerHTML = `
     <div class="card mb-3 bg-dark" style="max-width: 540px;">
     <div class="row g-0">
       
         <div class="col-4">
           <img class="img-fluid" src="${element.album.cover_medium}" class="card-img-top" alt="${element.artist.name}">
         </div>
         <div class="col">
           <div class="card-body h-100 w-100 d-flex flex-column justify-content-center gap-1">
              <a href="#"><h5 class="card-title text-light">${element.title}</h5></a>
              <a href="artist-page.html?id=${element.artist.id}"><p class="card-text">${element.artist.name}</p></a>
              <a href="album-page.html?id=${element.album.id}"><small class="card-text"><i>${element.album.title}</i></small></a>
           </div>
         </div>
     </div>
   </div>`

     container.appendChild(card)
     

     }
     ) 
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
