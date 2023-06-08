
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Weather from '../components/Weather';


const news = () => {
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})

return(
    <div>
        <div className="header">
            <h1>OpenWeatherMap API</h1>
            <p>Enter any city name in the input box below to get the data</p>
        </div>
        <div>
            <input type="text" placeholder="Enter the city" className="input_text"/>
            <input type="submit" value="Submit" className="submit"/>
        </div>

        <div className="container">
            <div className="card">
                <h1 className="name" id="name"></h1>
                <p className="temp"></p>
                <p className="clouds"></p>
                <p className="desc"></p>
            </div>
        </div>
    </div>
)
}

export default news