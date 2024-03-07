// requires an API key
const apiKey = '';

function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById("city").value;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error("Error fetching weather: ", error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again</p>`;
        })
}

function getLatLongWeatherReport(e){
    e.preventDefault();
    const lat = parseFloat(document.getElementById('latID').value);
    console.log(typeof(lat))
    const long = parseFloat(document.getElementById('longID').value);
    
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error("Error fetching weather: ", error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again</p>`;
        })
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
document.getElementById('latlongWeatherForm').addEventListener('submit', getLatLongWeatherReport);
