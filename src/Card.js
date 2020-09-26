import React from "react";
import "./Card.css";

const Card = ({ src, description, title, price }) => {
  return (
    <div className='card'>
      <img src={src} alt='' />
      <div className='card_info'>
        <h2>{title}</h2>
      </div>
      <div className='card_info'>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
