import React from 'react';
import './AdSlotStyles.css';
const AdSlot = ({ ad }) => {
    return (
        <div className="adContainer">
          <img src="https://i.pinimg.com/originals/8a/7e/7c/8a7e7cbb1899f6a4cd1aa0fdb9dec093.jpg"></img>
          <h4>{ad.title}</h4>
          <black>{ad.price} ₽</black>
          <gray>{new Date(ad.createdAt).toLocaleString()}</gray>
        </div>
      );
};

export default AdSlot;