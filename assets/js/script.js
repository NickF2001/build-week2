const urlAlbum = 'https://striveschool-api.herokuapp.com/api/deezer/album/'
const arrayId = [
    75621062,
    443350855,
    445994175,
    185484062,
    103879,
    303196427
]

arrayId.forEach((el)=> {
    fetch(urlAlbum + el)
    .then(response => response.json())
    .then(data => console.log(data))
})
