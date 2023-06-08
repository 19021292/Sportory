
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Weather from '../components/Weather';

export default function news() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&units=imperial&appid=${process.env.WEATHER_API_KEY}`;

  const fetchWeather = (query) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
  }

    return (
      <div>
          <button onClick={fetchWeather}>Fetch data</button>
      </div>
    );
}