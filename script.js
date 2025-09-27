function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = '11fac6059339f8852ad99e3988aa68bd'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherResult").innerHTML = `
                    <p><strong>${data.name}</strong></p>
                    <p>🌡 Temperature: ${data.main.temp} °C</p>
                    <p>☁ Weather: ${data.weather[0].description}</p>
                    <p>💧 Humidity: ${data.main.humidity}%</p>
                    <p>💨 Wind: ${data.wind.speed} km/h</p>
                `;
            } else {
                document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
            }
        })
        .catch(error => {
            console.error(error);
            document.getElementById("weatherResult").innerHTML = `<p>Error fetching data.</p>`;
        });
}
