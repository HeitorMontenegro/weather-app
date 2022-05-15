import "../styles/WeatherDisplay.css"

function WeatherDisplay({APIdata}){
     return(
         APIdata &&
    <div className={`display-container ${(APIdata.main.temp) > 23 ? "hot-theme" : "cold-theme"}`}>


<div className="city center-and-resize">{APIdata.name} </div>

<div className="temperature center-and-resize">{APIdata.main.temp} °C </div>

<img className="image" src={`http://openweathermap.org/img/wn/${APIdata.weather[0].icon}@2x.png`} alt="Weather icon"/>

<div className="description center-and-resize">{APIdata.weather[0].description.charAt(0).toUpperCase() + APIdata.weather[0].description.slice(1)}</div>

<div className="grid-container">

    <div className="humidity grid-info">
        <div>{APIdata.main.humidity}</div>
        <div className="grid-tag">%</div>
        <div className="grid-tag">Air humidity</div>
    </div>
    
    <div className="wind-speed grid-info">
        <div>{APIdata.wind.speed}</div>
        <div className="grid-tag">km/h</div>
        <div className="grid-tag">Wind Speed</div>
    </div>

    <div className="pressure grid-info">
        <div>{APIdata.main.pressure}</div>
        <div className="grid-tag">hPa</div>
        <div className="grid-tag">Atmospheric pressure</div>
    </div>
</div>

</div>
);

}

export default WeatherDisplay;