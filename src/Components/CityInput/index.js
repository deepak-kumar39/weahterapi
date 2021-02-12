// import { Button } from 'bootstrap'
import React from "react";
import "../CityInput/style.css";
import { Form, Button, Container } from "react-bootstrap";

export default function CityInput({city, setCity, fetchCityWeather}) {
    

  const [error, setError] = React.useState("");
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  const handleClick = ()=>{
      //logic to check if input field is empty
    if(!city){
        // alert("field is empty");
        setError("city field is empty");
    }
    else{
        setError("");
        fetchCityWeather();
    }
  }
//   console.log("city", city);
  return (
    <>
    <Container>
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="cityLabel">City</Form.Label>
          <Form.Control
            value={city}
            type="text"
            placeholder="Enter City"
            onChange={handleInputChange}
          />
          <p className="text">{error}</p>
        </Form.Group>

        <Button variant="primary"  onClick={handleClick}>
          Submit
        </Button>
      </Form>
      </Container>
    </>
  );
}
