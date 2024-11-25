import React from "react";
import { Link, useParams } from "react-router-dom";
import { cars } from "./CarList";
import "./CarDetails.css";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <h2>Car not found!</h2>;
  }

  return (
    <div className="car-details-container">
      <h1 className="car-details-name">{car.name}</h1>
      <p className="car-details-title">{car.title}</p>
      <img className="car-details-image" src={car.carImage} alt={car.name} />

      <Link to="/">
        <button className="car-details-home-button">
          <span className="material-icons">home</span>
        </button>
      </Link>
    </div>
  );
};

export default CarDetails;
