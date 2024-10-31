import React, {useState} from "react";

function SearchBar({onSearch}) 
{
    const[city, setCity] = useState("");
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        onSearch(city);
    }
    return(
      <form onSubmit={handleSubmit}>
           <input placeholder="enter city name" id="cityInput" value={city} onChange={(e)=> setCity(e.target.value)}/>
           <button type="submit" id="submitButton">search</button>
      </form>
    );
}

export default SearchBar;