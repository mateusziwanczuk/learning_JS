// source: LearnWebCode, https://www.youtube.com/watch?v=rJesac0_Ftw

// Asynchronous
// JavaScript
// And
// XML 

// XML - data format like JSON

var pageCounter = 1;
var animalContainer = document.getElementById("animal-info")
var btn = document.getElementById("btn");

btn.addEventListener('click', function() {
    
    var myRequest = new XMLHttpRequest();

    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
        // GET: download data
        // POST: send data

    myRequest.onload = () => {
        // console.log(myRequest.responseText); // Konsola wyświetla plik JSON z tablicą obiektów.
        // var myData = myRequest.responseText;
        // console.log(myData[0]); // Chcemy wyciągnąć pierwszy obiekt.
            // Konsola wyświetli '[', ponieważ nie wie, że pobrany plik to JSON.
        var myData = JSON.parse(myRequest.responseText);
        // console.log(myData[0]); 
        renderHTML(myData);
    }

    myRequest.send();

    pageCounter++;
    if (pageCounter > 3){
        btn.classList.add("hide-me");
    }

})

function renderHTML(data){
    var htmlString = "";
    for (i = 0; i < data.length; i++ ){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
        for (ii = 0; ii < data[i].foods.likes.length; ii++){
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }
        htmlString += ' and dislikes ';
        for (ii = 0; ii < data[i].foods.dislikes.length; ii++){
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += '.</p>';
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);

}