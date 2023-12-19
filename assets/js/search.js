const urlSearch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

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



