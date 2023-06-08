import { useState } from "react";
import Weather from '../components/Weather';

const news = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=ed02218501cb5a058c525eebeba8c638"
    const url2 = "https://api.openweathermap.org/data/2.5/weather?q=Haiphong&appid=ed02218501cb5a058c525eebeba8c638"

    const[weather, setWeather] = useState({});
    function fetchWeather(){
        fetch(url)
            .then((response) => response.json())
            .then((data) => setWeather(data))
        
    }  
    fetchWeather()
    return(
        <div>
            <div style={{float:'left'}}>{weather.main && <Weather data = {weather}/>}</div>
            <div>{weather2.main && <Weather data = {weather2}/>}</div>
        </div>
    )

}

export default news