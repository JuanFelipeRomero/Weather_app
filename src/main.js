
let ciudad = 'colombia';
const APIKey = "002c80ba9337129922ef5eb115e061e5";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIKey}`;

fetch(url) //conectar con el server
    .then(response => response.json()) //Procesar la respuesta y convertirla en JSON
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log("Error: ",error));
