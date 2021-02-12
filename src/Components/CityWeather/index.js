import React from "react";
import { Container } from "react-bootstrap";
import "../CityWeather/style.css";
export default function CityWeather(props) {
  // const[newTemp,setTemp] = React.useState();
  // console.log(props.tem,"temp");
  const render = () => {
    if (props.city) {
      return (
        <Container>
          <div className="cityWeather">
            {props.city}
            <br />
            <div className="temp">
              {(props.tem - 271).toFixed(2)} °Cel
              <br />
              <br />
            </div>
            Max
            <br />
            <div className="temp">
              {(props.max - 271).toFixed(2)} °Cel
              <br />
            </div>
            Min
            <br />
            <div className="temp">{(props.min - 271).toFixed(2)} °Cel</div>
          </div>
        </Container>
      );
    }
    return (
      <Container>
        <div className="cityWeather"></div>
      </Container>
    );
  }

  return (
      render()
  )
}
