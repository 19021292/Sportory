
const news = () => {
    url = "https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=05b4a3be72d547d7142b40bc65ffdc3c"
    function fetchWeather(query){
        fetch(url)
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    return(
        <div>
            <button onClick={fetchWeather}>Fetch</button>
        </div>
    )
}

export default news