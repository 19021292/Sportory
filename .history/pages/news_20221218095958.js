import { useState } from "react";
import Weather from '../components/Weather';

const news = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=ed02218501cb5a058c525eebeba8c638"
    const url2 = "https://api.openweathermap.org/data/2.5/weather?q=HoChiMinh&appid=ed02218501cb5a058c525eebeba8c638"
    const[weather, setWeather] = useState({});
    function fetchWeather(){
        fetch(url)
            .then((response) => response.json())
            .then((data) => setWeather(data))
    }
    const[weather2, setWeather2] = useState({});
    function fetchWeather2(){
        fetch(url)
            .then((response) => response.json())
            .then((data) => setWeather2(data))
    }
    fetchWeather()
    fetchWeather2()
    return(
        <div>
            {weather.main && <Weather data = {weather}/>}
            {weather2.main && <Weather data = {weather2}/>}
        </div>
    )
}

export default news