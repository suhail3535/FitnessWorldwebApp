import React from "react";
import "./trainer.css";
import { trainers } from "../../data.js";
const Trainers = () => {
  return (
    <div className="trainer_div">
      <h1 style={{ marginBottom: "2rem", textAlign: "center" }}>
        Meet Our Trainers
      </h1>
      <div id="trainer_details_div">
        {trainers.map((item, index) => {
          return (
            <div  className="trainer_card" key={index}>
              <div className="trainer_image">

                <img src={item.image} alt="img" />
              </div>
              <h2>{item.name}</h2>
              <h5>{item.job}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trainers;
