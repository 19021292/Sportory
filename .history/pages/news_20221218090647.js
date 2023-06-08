
const news = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=05b4a3be72d547d7142b40bc65ffdc3c"
    
    function renderWeather( weather ) {
        var resultsContainer = document.querySelector("#weather-results")
        var city = document.createElement("h2");
        city.textContent = weather.name;
        resultsContainer.append(city);
        
        var temp = document.createElement("p");
        temp.textContent = "Temp: " + weather.main.temp + " F";
        resultsContainer.append(temp);

        var humid = document.createElement("p");
        humid.textContent = "Humidity: " + weather.main.humidity + " %";
        resultsContainer.append(humid);

        details.append("")
    }

    function fetchWeather(query){
        fetch(url)
            .then((response) => response.json())
            .then((data) => renderWeather(data))
    }

    fetchWeather()

    return(
        <div id="weather-results">

        </div>
    )
}

export default news