import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CarList.css";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const CarCard = ({ car, handleColorClick }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="car-card" data-aos="fade-left" data-aos-duration="1000">
      <div className="background-animation"></div>

      <div className="car-info">
        <div
          className="logo-ball"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <a
            href="https://instagram.com/caiorossi.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <FaInstagram className="instagram-icon" />
          </a>
        </div>

        <h1 className="car-name" data-aos="fade-up" data-aos-duration="1000">
          {car.name}
        </h1>
        <div className="car-title-info">
          <p
            className="car-title"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {car.title}
          </p>
          <Link to={`/car/${car.id}`}>
            <button
              className="info-button"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              More Details
            </button>
          </Link>
        </div>
        <div className="color-options">
          {car.colorOptions.map((color, index) => (
            <div
              key={index}
              className="color-circle"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            ></div>
          ))}
        </div>
      </div>

      <div className="car-image">
        <img
          src={car.logoImage}
          alt="Logo"
          className="car-logo"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
        <img
          src={car.carImage}
          alt="Car"
          className="car-img"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
      </div>

      <div className="footer-text">
        Developed by{" "}
        <a
          href="https://instagram.com/caiorossi.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Caiorossi.dev
        </a>
      </div>
    </div>
  );
};

export default CarCard;
