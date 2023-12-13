const urlAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='
/*
const arrayId = [
    'Bellofigo',
    'Ligabue',
    'Queen',
    'Beethoven',
    'Bustarhymes',
    'Pulcinopio'
]
*/

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
*/
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
/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/