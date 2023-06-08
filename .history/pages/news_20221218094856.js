import { useState } from "react";
import Weather from '../components/Weather';

const news = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=2644b82eabbf3d031a4a5c9e5bcc25f4"
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