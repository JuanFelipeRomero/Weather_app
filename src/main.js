//Tarjeta
const appContainer = document.getElementById("appContainer");
const weatherImage = document.getElementById("weatherImage");

//labels
const weatherValueLabel = document.getElementById("weather_value_label");
const degreesValueLabel = document.getElementById("degrees_value_label");
const cityLabel = document.getElementById("city_label");
const windValueLabel = document.getElementById('wind_value_label');
const humidityValueLabel = document.getElementById("humidity_value_label");

//form
const form = document.getElementById("app__form");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let city = form.elements['city'].value;

    const APIKey = "002c80ba9337129922ef5eb115e061e5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

    fetch(url) //conectar con el server
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`,
                weatherImage.src = "../src/assets/logos/alert.svg",
                weatherValueLabel.innerHTML = "weather",
                cityLabel.innerHTML = "Locacion no encontrada",
                degreesValueLabel.innerHTML = "Temp°c",
                windValueLabel.innerHTML = "",
                humidityValueLabel.innerHTML ="",
                );
                
            }
            return response.json();
        })    
        .then(data => { //Procesar la respuesta y convertirla en JSON

            console.log(data);
            console.log(`weather: ${data.weather[0].description}`)

            cityLabel.innerHTML = city;
            degreesValueLabel.innerHTML = Math.round(data.main.temp) + "°c";
            windValueLabel.innerHTML = data.wind.speed + "m/s";
            humidityValueLabel.innerHTML = data.main.humidity + "%";

            if (data.weather[0].description.toLowerCase().includes("clear")) {
                weatherValueLabel.innerHTML =  data.weather[0].description;
                appContainer.style.backgroundColor = "#6fbcef";
                weatherImage.src = "../src/assets/images/sun.png";
            }

            else if (data.weather[0].description.toLowerCase().includes("clouds")) {
                weatherValueLabel.innerHTML =  data.weather[0].description;
                appContainer.style.backgroundColor = "#AED6F1"; //darkblue
                weatherImage.src = "../src/assets/images/cloudly.png"

            } else if (data.weather[0].description.toLowerCase().includes("overcast")) {
                weatherValueLabel.innerHTML =  data.weather[0].description;
                appContainer.style.backgroundColor = "#85929E"; 
                weatherImage.src = "../src/assets/images/cloud.png"

            } else if (data.weather[0].description.toLowerCase().includes("rain")) {
                weatherValueLabel.innerHTML =  data.weather[0].description;
                appContainer.style.backgroundColor = "#4B93CE"; 
                weatherImage.src = "../src/assets/images/rain.png"
            }

        })
        .catch(error => console.log("Error: ",error));

});
