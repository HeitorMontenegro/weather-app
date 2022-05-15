import React, { useState, useEffect} from 'react';
import "../styles/InfoInput.css"
function InfoInput({APIdata, setAPIdata}){

    let [countriesData, setCountriesData] = useState(null);
    let [citiesData, setCitiesData] = useState(null);
    let [city, setCity] = useState(null);

    useEffect(() =>{
        async function fetchWeatherAPI(){
         try{
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec832e49fa891457a335247c26ebe682&units=metric`);
            let json = await res.json();
            setAPIdata(json);
        }   catch (err){
            console.log(err);
            }   
            setCity(null)
        }
        city && fetchWeatherAPI();
    })

    useEffect(()=>{ 
        async function fetchCountryAPI(){
         try{
            let res = await fetch("https://countriesnow.space/api/v0.1/countries");
            let json = await res.json();
            setCountriesData(json.data);
        }   catch (err){
            console.log(err);
            }   
        }
        fetchCountryAPI();
    },[]);

    const handleCountry = (e) =>{
        setCitiesData(countriesData.find(item => item.country === e.target.value).cities)
    }
    
    const handleCity = (e) =>{
        setCity(e.target.value);
    }

return(
    <div className={`selector-container ${APIdata ? (APIdata.main.temp > 23 ? "hot-theme" : "cold-theme") : ""}`} >
        <select className="selector" onChange={handleCountry} name="" id="">
                <option>Select country</option>
                {countriesData && countriesData.map((item, index) => <option key={`${item.iso3}-${index}`} >{item.country}</option>)}
        </select>
    <select className="selector" onChange={handleCity} name="" id="">
            <option>Select city</option> 
            {citiesData && citiesData.map((item, index) => <option key={`${item}-${index}`}>{item}</option>)}   
    </select>
    </div>
);
}

export default InfoInput;