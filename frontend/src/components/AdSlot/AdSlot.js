import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AD_ROUTE } from '../../utils/consts';
import './AdSlotStyles.css';
const AdSlot = ({ ad }) => {
  const navigate = useNavigate();

  return (
    <div className="adContainer" onClick={() => navigate(AD_ROUTE + '/' + ad.id)}>
      <h4>{ad.title}</h4>
      <h4>{ad.price} ₽</h4>
      <h4>Date({ad.createdAt})</h4>
    </div>
  );
};

export default AdSlot;
