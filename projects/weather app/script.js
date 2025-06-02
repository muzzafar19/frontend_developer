
function checkweather() {
    const city = document.getElementById("city").value;
    const apikey = "6e3388bab05bdbb382fdab8c10a0dc5a";


    if (!city) {
        alert("please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const result = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Tempreture: ${data.main.temp} °C</p>
            <p>Condition: ${data.weather[0].main}</p>
            `;
            document.getElementById("weather-result").innerHTML = result;
        })
        .catch(error => {
            document.getElementById("weather-result").innerHTML = `<p style="color: red;">${error.message}</p>`;
        })
}