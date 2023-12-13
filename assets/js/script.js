const urlAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/'
const arrayId = [
    75621062,
    443350855,
    445994175,
    185484062,
    103879,
    303196427,

    141719812,
    345675587,
    112190262,
    141719812
]

arrayId.forEach((el)=> {
    fetch(urlAlbum + el)
    .then(response => response.json())
    .then(data => createAlbum(data))
})


function createAlbum(data){
    
}
