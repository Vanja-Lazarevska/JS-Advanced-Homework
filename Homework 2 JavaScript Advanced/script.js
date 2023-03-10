// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:

// Height
// Weight
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1

let btnStarWars = document.getElementById('starWars')

btnStarWars.addEventListener('click', function(){
    let header = document.createElement('h1')
    let div = document.getElementById('container')
     div.appendChild(header)

     let table = document.createElement('table')
     div.appendChild(table)
     table.style.border = '1px solid'
   
    
    fetch('https://swapi.dev/api/people/1')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        useTheData(data, header)
        makeTabel(data, table, btnStarWars)
    })
    .catch(function(error){
        console.log('There was an error', error)
    })
})

function useTheData(data,header) {
    header.innerText = data.name
}

function makeTabel(data,table,button){
    let newArray2 = ['height', 'birth_year', 'eye_color', 'hair_color']

    for(let i = 0; i < 2; i++){
        let tableRow = document.createElement('tr')
        table.appendChild(tableRow)
        console.log(tableRow)
    
    for(let j = 0; j < newArray2.length; j++){
        if(i === 0){
            let tableHead = document.createElement('th')
            tableHead.innerText = newArray2[j]
            tableRow.appendChild(tableHead)
            console.log(tableHead)
        }
        else {
            let newArray = [data.height, data.birth_year, data.eye_color,data.hair_color]
            let tableData = document.createElement('td')
            tableData.innerText = newArray[j]
            tableRow.appendChild(tableData)
            console.log(tableData)

        }

        button.disabled = true;
        
        
    }

    }
}


