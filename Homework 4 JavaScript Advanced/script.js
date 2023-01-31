// Homework 
// Task 1
// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:
// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1
// Task 2
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.
// **API URL: ** https://swapi.dev/api/planets/?page=2

let container = document.getElementById('container');
let btn = document.getElementById('btn');
let containerButton = document.getElementById('button');
let url1 = 'https://swapi.dev/api/planets/?page=1';
let url2 = 'https://swapi.dev/api/planets/?page=2';


function apiWithFetch(url) {
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let planetArray = data.results
        url === url1 ? printData(planetArray,container) : printData(planetArray, container)
    })
    .catch(function(error){
        console.log(error)
    })

}
btn.addEventListener('click', function(){
    btn.style.display = 'none'
    containerButton.appendChild(newButton)
    apiWithFetch(url1)
})

function printHeaders(row){
let headers = ['Name', 'Climate', 'Gravity', 'Population'];
for(let i = 0; i < headers.length; i++){
        let thead = document.createElement('th');
        thead.innerText = headers[i]
        row.appendChild(thead)
    }
}

let table = document.createElement('table');

function printData(data, containerDiv){
    containerDiv.appendChild(table)
    table.style.border = '1px solid black'
    table.cellPadding = '5px';
    printHeaders(table)


    data.forEach(planet => {    
        let trow = document.createElement('tr'); 
        table.appendChild(trow);
        let array = [planet.name, planet.climate, planet.gravity, planet.population]
        for(let i = 0; i < array.length; i++){
            let tableData = document.createElement('td')
            tableData.style.border = '1px solid black'
            tableData.innerText = array[i]
            trow.appendChild(tableData)
        }

    newButton.innerText = 'NEXT 10'

    });
}

let newButton = document.createElement('button')
let previosuBtn = document.createElement('button')

newButton.addEventListener('click', function(){
    table.innerHTML = ''
    newButton.style.display = 'none';
    apiWithFetch(url2)
    previosuBtn.innerText = 'PREVIOUS 10'
    containerButton.appendChild(previosuBtn)
})

previosuBtn.addEventListener('click', function(){
    table.innerHTML = ''
    previosuBtn.style.display = 'none'
    apiWithFetch(url1)
})
