import React from "react";
import "./App.css";
import CityInput from "./Components/CityInput";
import CityWeather from "./Components/CityWeather";
function App() {
  const [city, setCity] = React.useState("");
  const[temp, setTemp] = React.useState();
  const[max, setMax] = React.useState();
  const[min, setMin] = React.useState();
  const [cityWeather, setCityWeather] = React.useState({});
  const fetchCityWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
    .then((res) => res.json())
    .then((result) => {
      console.log("result is ", result);
    setTemp(result.main.temp);
    setMin(result.main.temp_min);
    setMax(result.main.temp_min);
   
      // console.log(temp, "temp in app")
      // setCityWeather(result.main.temp);
    }); 
      
  };
  
  return (
    <>
    <div className="main">
      <CityInput
        city={city}
        setCity={setCity}
        fetchCityWeather={fetchCityWeather}
      />
      <CityWeather city= {city} tem  = {temp} max = {max} min = {min}/>
      </div>
    </>
  );
}

export default App;
