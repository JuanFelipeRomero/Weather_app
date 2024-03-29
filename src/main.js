//labels
let weatherValueLabel = document.getElementById("weather_value_label");
let degreesValueLabel = document.getElementById("degrees_value_label");
let cityLabel = document.getElementById("city_label");
let windValueLabel = document.getElementById('wind_value_label');
let humidityValueLabel = document.getElementById("humidity_value_label");

//form
const form = document.getElementById("app__form");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let city = form.elements['city'].value;
    cityLabel.innerHTML = city;

    const APIKey = "002c80ba9337129922ef5eb115e061e5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

    fetch(url) //conectar con el server
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`); 
            }
            return response.json();
        })    
        .then(data => { //Procesar la respuesta y convertirla en JSON

            console.log(data);
            console.log(`weather: ${data.weather[0].main}`)

            weatherValueLabel.innerHTML =  data.weather[0].main;
            degreesValueLabel.innerHTML = Math.round(data.main.temp) + "°c";
            windValueLabel.innerHTML = data.wind.speed + "m/s";
            humidityValueLabel.innerHTML = data.main.humidity + "%";


        })
        .catch(error => console.log("Error: ",error));

});





/*
Thunderstorm
Descriptions might include "thunderstorm with light rain," "thunderstorm with heavy rain," "thunderstorm with light drizzle," etc.

Drizzle
Includes conditions like "light intensity drizzle," "heavy intensity drizzle," "light intensity drizzle rain," etc.

Rain
Covers various types of rain, such as "light rain," "moderate rain," "heavy intensity rain," "very heavy rain," "extreme rain," "freezing rain," "light intensity shower rain," "heavy intensity shower rain," "ragged shower rain," etc.

Snow
Encompasses different snow conditions, including "light snow," "Snow," "Heavy snow," "Sleet," "Light shower sleet," "Shower sleet," "Light rain and snow," "Rain and snow," "Light shower snow," "Shower snow," "Heavy shower snow," etc.

Mist
Conditions under this category include "mist," reflecting reduced visibility due to particle suspension in the air.

Smoke
Indicates the presence of smoke in the air.

Haze
Similar to mist, but usually due to dust, smoke, and other particles, creating a gray or blueish haze.

Dust/ Sand Dust
Includes "dust whirls," "sand," "dust," "volcanic ash," "squalls," "tornado," etc., indicating more severe atmospheric disturbances.

Fog
Denotes a specific type of mist, typically implying a very low visibility condition due to water droplets in the air.

Sand
Specifically relates to airborne sand particles, often due to sandstorms.

Dust
Refers to airborne dust particles.

Ash
Indicates volcanic ash presence in the atmosphere.

Squall
Sudden, sharp increases in wind speed which are usually short-lived.

Tornado
Indicates a tornado or funnel cloud sighting.

Clear
Represents clear sky conditions, with descriptions like "clear sky."

Clouds
Covers various degrees of cloudiness, including "few clouds" (11-25% coverage), "scattered clouds" (25-50% coverage), "broken clouds" (51-84% coverage), and "overcast clouds" (85-100% coverage).
*/