import { useState } from "react";
import Weather from '../components/Weather';

const news = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=ed02218501cb5a058c525eebeba8c638"
    const url2 = "https://api.openweathermap.org/data/2.5/weather?q=HoChiMinh&appid=ed02218501cb5a058c525eebeba8c638"
    const[weather, setWeather] = useState({});
    function fetchWeather(query){
        fetch(url, url2)
            .then((response) => response.json())
            .then((data) => setWeather(data))
    }

    fetchWeather()

    return(
        <div>
            {weather.main && <Weather data = {weather}/>}
        </div>
    )
}

export default news