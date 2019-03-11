/* Dane są dwa endpointy:
    1) https://jsonplaceholder.typicode.com/albums
    2) https://jsonplaceholder.typicode.com/users/1

    Wyświetl w konsoli "name" usera i należące do niego albumy w postaci obiektu:
        {
            name: nazwa usera
            albums: tablica albumów tego usera
        }
*/

var albumsPromise = fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())

console.log(albumsPromise);

var userPromise = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())

Promise.all([userPromise, albumsPromise])
    .then( values => {
        var user = values[0];
        var albums = values[1];
        console.log({ name: user.name, albums: albums.filter(album => album.userId === user.id),})
    })


/* Wykorzystaj loader w pliku html i button
    Napisz funkcję pobierającą albumy na kliknięcie przycisku.  Pobierz albumy. 
    Gdy zaczyna się pobieranie, napis Loading się pokazuje. Po zakończeniu pobierania 
    danych lub w przypadku błędu, napis ma zniknąć.  
*/

const loader = document.querySelector('#loader')
const loadButton = document.querySelector('#load-btn')

function getAlbums(){
    loader.style.display = "block";
    fetch('https://jsonplaceholder.typicode.com/albums') 
        .then(response => response.json())
        .then(value => console.log(value))
        .finally(() => loader.style.display = 'none')
}

loadButton.addEventListener('click', getAlbums)
// Inspect -> Network -> Slow3g