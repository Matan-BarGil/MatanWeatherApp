import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WethearDisplay from './components/WethearDisplay';

function App() {
  const[city, setCity] = useState("");
  const[weatherInfo, setWeatherInfo]= useState({});
  const [isInitial, setIsInitial] = useState(true);

  

  const handleSearch= (cityName) => 
  {
    setCity(cityName);
  }

  function isAlphabetOnly(str) {
    return /^[A-Za-z]+$/.test(str);
  }
  

  useEffect(()=>
    {
        if (isInitial) {
          setIsInitial(false);
          return;
        }
        async function GetWeather() 
         {
          try{
          if(city.length === 0 || !isAlphabetOnly(city)) {throw new Error("city has not been found");}
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c8f8f5fbe9ef4b06988180949242310&q=${city}`);
          if(!response.ok && city !=="") {throw new Error("city has not been found");}

          const data = await response.json();
          setWeatherInfo(data.current);
          console.log(weatherInfo);}
          catch(error) 
          {
            alert("the city has not been found")
            setCity("Paris");
          }
         }

        GetWeather();
      },[city]);
  
  return(
    <div>
    <h1 id="SearchBar_h1">WorldWide Weather Website</h1>
    <SearchBar onSearch={handleSearch}/>
    <WethearDisplay cityInfo={weatherInfo} cityName={city}/>
    <p>This website made by Matan Bar Gil, Powered by WeatherAPI </p>
    </div>
  );
}

export default App;
