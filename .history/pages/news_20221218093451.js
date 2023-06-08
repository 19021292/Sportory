import { useState } from "react";
import Weather from '../components/Weather';

const news = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=05b4a3be72d547d7142b40bc65ffdc3c"
    const[weather, setWeather] = useState({});
    function fetchWeather(query){
        fetch(url)
            .then((response) => response.json())
            .then((data) => setWeather(data))
    }

    fetchWeather()

    return (
        <div className='1' style={{maxWidth:'200px',boxShadow:'0 4px 8px',borderColor:'blueviolet'}}>      
            <div className='bg-black/50 relative p-8 rounded-md'>
                <p className='text-2xl text-center pb-6' style={{float:'left'}}> {data.name}</p>
                <div className='flex justify-between text-center' style={{overflow: 'hidden'}}>
                    <div>
                        <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className='text-xl'>Feels Like</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                        <p className='text-xl'>Humidity</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
                        <p className='text-xl'>Winds</p>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default news