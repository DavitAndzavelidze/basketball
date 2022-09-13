import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card__container">
      <div className="card__box">
        <img src={props.img} alt="images" />
      </div>
      <div className="card__info">
        <h3>{props.name}</h3>
        <h4>{props.height}</h4>
        <button>More...</button>
      </div>
    </div>
  );
}
export default Card;
