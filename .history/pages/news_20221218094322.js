import { useState } from "react";
import Weather from '../components/Weather';

const news = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=05b4a3be72d547d7142b40bc65ffdc3c"
    const[weather, setWeather] = useState({});
    function fetchWeather(query){
        fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    fetchWeather()

    return(
        <div>
            {weather.main && <Weather data = {weather}/>}
        </div>
    )
}

export default news