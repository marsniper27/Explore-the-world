const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');


function searchLocation() {
    const input = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    console.log('input',input)

    if(input=== ''){
        resultDiv.innerHTML += `<h2>Please Enter a Search value</h2>`;
    }
    else if(input.includes('beach')){
        fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log('data',data)
            const locations = data.beaches;
            console.log('locations',locations)

            if (locations) {
                for(const location of locations){
                    console.log('location',location)
                    resultDiv.innerHTML += `<img src="${location.imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<h2>${location.name}</h2>`;
                    resultDiv.innerHTML += `<p>${location.description}</p>`;
                }
            } else {
                resultDiv.innerHTML = 'Condition not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
    }
    else if(input.includes("temple")){
        
    }
    else{
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const location = data.countries.find(item => item.name.toLowerCase() === input);

            if (location) {
                const symptoms = condition.symptoms.join(', ');
                const prevention = condition.prevention.join(', ');
                const treatment = condition.treatment;

                resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
                resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

                resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
                resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
                resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            } else {
                resultDiv.innerHTML = 'Condition not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
    }
}

function clearSearch(){
    console.log('clearing search')
    document.getElementById('search').value = '';
}

btnSearch.addEventListener('click', searchLocation); 

btnClear.addEventListener('click', clearSearch); 
