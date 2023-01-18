// Movies renting App Create a movie renting app There should be an array of movie names There should be an input and a search button When the person enters a name of a movie it should search the array If the name exists it should show an H1 element that says: "The movie can be rented" in green text If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text The input should not be case sensitive ( it should find the movie regardless of capital or small letters )

let movies = ['Gone Girl', 'The Girl on the Train', 'Shutter Island', 'Memento', 'Inception', 'The Skin I Live In', 'Seven', 'Panic Room'];

let input1 = document.getElementById('userInput');
let button = document.getElementById('search');
let showToUser = document.getElementById('showToUser');


function findTheMovie(arrayOfMovies, userInput){
    let input = userInput.value = userInput.toLowerCase()
    let movieInTheArray = document.createElement('h1')

    for(let i = 0; i < arrayOfMovies.length; i++){
        if(arrayOfMovies[i].toLowerCase() == input){
            movieInTheArray.innerText = 'The movie can be rented'
            movieInTheArray.style.color = 'green'
            showToUser.appendChild(movieInTheArray)
            break;
        }

        else{
            movieInTheArray.innerText = 'The movie can"t be rented'
            movieInTheArray.style.color = 'red'
            showToUser.appendChild(movieInTheArray)
        }
    }
}

button.addEventListener('click', function(){
    let searchMovie = input1.value
    findTheMovie(movies, searchMovie)
})