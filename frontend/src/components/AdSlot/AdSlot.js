import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AD_ROUTE } from '../../utils/consts';
import './AdSlotStyles.css';
const AdSlot = ({ ad }) => {
  const navigate = useNavigate();

  return (
    <div className="adContainer" onClick={() => navigate(AD_ROUTE + '/' + ad.id)}>
          <img src="https://i.pinimg.com/originals/8a/7e/7c/8a7e7cbb1899f6a4cd1aa0fdb9dec093.jpg"></img>
      <h4>{ad.title}</h4>
      <black>{ad.price} ₽</black>
      <gray>{new Date(ad.createdAt).toLocaleString()}</gray>
    </div>
  );
};

export default AdSlot;
