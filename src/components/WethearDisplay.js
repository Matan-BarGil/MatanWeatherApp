import React, {useState} from "react";

function WethearDisplay({cityInfo, cityName}) 
{

    function setBackgroundImage() 
    {
      if(cityInfo.is_day === 1) 
        {
          return "Yellow";
        }
      return "gray";
    }

   try{
    return(
      <>
      <img src ={cityInfo.condition.icon} id="condition_img"/>
      <div id="container" style={{ backgroundColor: setBackgroundImage() }}>
        <h1>{cityName}</h1>
        <h1>{cityInfo.temp_c}°</h1>
        <h1>{cityInfo.condition.text}</h1>
        
      </div>
      </>
    );
  }catch(error) {return;}
  
}

export default WethearDisplay;