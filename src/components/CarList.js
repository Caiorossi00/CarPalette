import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarCard from "./CarCard";
import lambo from "../assets/lambo.png";
import lamboLogo from "../assets/lambo-logo.png";
import ferrari from "../assets/ferrari.png";
import ferrariLogo from "../assets/ferari-logo.png";
import porsche from "../assets/porsche.png";
import porscheLogo from "../assets/porsche-logo.png";
import "./CarList.css";

export const cars = [
  {
    id: 1,
    name: "Yellow Lamborghini",
    title: "Expect the Unexpected.",
    backgroundColor: "#f4b61e",
    buttonColor: "#ffffff",
    buttonTextColor: "#FFD700",
    carImage: lambo,
    logoImage: lamboLogo,
    colorOptions: ["#FF0000", "#808080"],
    cv: "750cv",
    maxSpeed: "350km/h",
    zeroCem: "2.9s",
    detailsFotos: [
      "https://testecsrs.my.canva.site/cars/media/fd4ed0aa6f6c643fe91029b00bb0276c.png",
      "https://testecsrs.my.canva.site/cars/media/e268651a78435adb5004bdf49ea9c888.png",
      "https://testecsrs.my.canva.site/cars/media/6076914e569c677ae0e373421525b6fe.png",
      "https://testecsrs.my.canva.site/cars/media/c9512c20e05403ad16dff70a5e7dd70c.png",
      "https://testecsrs.my.canva.site/cars/media/e51ccd64c52b8b753e092bfd9573e852.png",
    ],
  },
  {
    id: 2,
    name: "Red Ferrari",
    title: "You are the fuel.",
    backgroundColor: "#df0a0d",
    buttonColor: "#ffffff",
    buttonTextColor: "#FF0000",
    carImage: ferrari,
    logoImage: ferrariLogo,
    colorOptions: ["#FFD700", "#808080"],
    cv: "810cv",
    maxSpeed: "352km/h",
    zeroCem: "2.9s",
    // detailsFotos: [fotoCard, fotoDetail1, fotoDetail2, fotoDetail3, fotoBanner],
  },
  {
    id: 3,
    name: "Silver Porsche",
    title: "Driven by Dreams",
    backgroundColor: "#636268",
    buttonColor: "#ffffff",
    buttonTextColor: "#808080",
    carImage: porsche,
    logoImage: porscheLogo,
    colorOptions: ["#FFD700", "#FF0000"],
    cv: "650cv",
    maxSpeed: "330km/h",
    zeroCem: "2.7s",
    // detailsFotos: [fotoCard, fotoDetail1, fotoDetail2, fotoDetail3, fotoBanner],
  },
];

const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(cars[0]);

  const handleColorClick = (color) => {
    if (selectedCar.name === "Yellow Lamborghini") {
      if (color === "#FF0000") {
        setSelectedCar(cars[1]);
      } else if (color === "#808080") {
        setSelectedCar(cars[2]);
      }
    } else if (selectedCar.name === "Red Ferrari") {
      if (color === "#FFD700") {
        setSelectedCar(cars[0]);
      } else if (color === "#808080") {
        setSelectedCar(cars[2]);
      }
    } else if (selectedCar.name === "Silver Porsche") {
      if (color === "#FFD700") {
        setSelectedCar(cars[0]);
      } else if (color === "#FF0000") {
        setSelectedCar(cars[1]);
      } else if (color === "#808080") {
        setSelectedCar(cars[2]);
      }
    }
  };

  return (
    <div
      className="car-list"
      style={{
        background: `linear-gradient(to right, ${selectedCar.backgroundColor} 73%, #ffffff 20%)`,
      }}
    >
      <CarCard car={selectedCar} handleColorClick={handleColorClick} />
      <Link to={`/car/${selectedCar.id}`}>
        <button className="info-button">More Details</button>
      </Link>
    </div>
  );
};

export default CarList;
