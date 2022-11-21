import React, { useState } from 'react';
import './AdSlotStyles.css';
const AdSlot = ({ ad }) => {
    return (
        <div className="adContainer">
          <h4>{ad.title}</h4>
          <h4>{ad.price} ₽</h4>
          <h4>Date({ad.createdAt})</h4>
        </div>
      );
};

export default AdSlot;