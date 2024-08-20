const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
const resultDiv = document.getElementById('result'); 

function searchName() {
    const input = document.getElementById('nameInput').value.toLowerCase();
    const resultDiv = document.getElementById('result'); 
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        let found = false;

        // Search Countries
        data.countries.forEach(country => {
            country.cities.forEach(city => {
                if (city.name.toLowerCase().includes(input)) {
                    found = true;
                    resultDiv.innerHTML += `<h2>${city.name}</h2>`;
                    resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="${city.name}">`;
                    resultDiv.innerHTML += `<p>${city.description}</p>`;
                }
            });
        }); 

        // Search in temples
        data.temples.forEach(temple => {
            if (temple.type.toLowerCase().includes(input)) {
                found = true;
                resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.name}">`;
                resultDiv.innerHTML += `<p>${temple.description}</p>`;
            } else {
            if (temple.name.toLowerCase().includes(input)) {
                found = true;
                resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.name}">`;
                resultDiv.innerHTML += `<p>${temple.description}</p>`;
            }}
        });

        // Search in beaches
        data.beaches.forEach(beach => {
            if (beach.type.toLowerCase().includes(input)) {
                found = true;
                resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="${beach.name}">`;
                resultDiv.innerHTML += `<p>${beach.description}</p>`;
            } else {
            if (beach.name.toLowerCase().includes(input)) {
                found = true;
                resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="${beach.name}">`;
                resultDiv.innerHTML += `<p>${beach.description}</p>`;
            }}
        });

        if (!found) {
            resultDiv.innerHTML = 'Location not found.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}

function resetForm() {
    document.getElementById("nameInput").value = "";
    document.getElementById("result").value = "";
    resultDiv.innerHTML = '';
    }

btnSearch.addEventListener('click', searchName);
btnReset.addEventListener('click', resetForm);
