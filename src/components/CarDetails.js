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
      <div className="car-details-navbar">
        <h1 className="car-details-name">{car.name}</h1>
        <Link to="/">
          <button className="car-details-home-button">
            <span className="material-icons">Home</span>
          </button>
        </Link>
      </div>

      <div className="car-details-main">
        <div className="car-details-left">
          <img
            className="car-details-image"
            src={car.detailsFotos[0]}
            alt="Car Detail"
          />
          <div className="car-details-info">
            <p className="car-details-cv">
              <span>Power (CV)</span> {car.cv}
            </p>
            <p className="car-details-max-speed">
              <span>Max Speed</span> {car.maxSpeed}
            </p>
            <p className="car-details-zero-cem">
              <span>0-100 km/h</span> {car.zeroCem}
            </p>
          </div>
        </div>
        <div className="car-details-right">
          <div className="car-details-gallery">
            <img
              className="car-detail-image"
              src={car.detailsFotos[1]}
              alt="Car Detail 1"
            />
            <img
              className="car-detail-image"
              src={car.detailsFotos[2]}
              alt="Car Detail 2"
            />
            <img
              className="car-detail-image"
              src={car.detailsFotos[3]}
              alt="Car Detail 3"
            />
          </div>
        </div>
      </div>

      <img
        className="car-details-banner"
        src={car.detailsFotos[4]}
        alt="Car Banner"
      />
    </div>
  );
};

export default CarDetails;
