import { useState, useContext } from 'react';
import { Context } from '../../index';
import { create } from '../../API/adAPI';
import { useNavigate } from 'react-router-dom';
import { ADS_ROUTE } from '../../utils/consts';
import './CreatureAdStyles.css';

const CreatureAd = () => {
  const { user } = useContext(Context);
  const userData = { ...user.userInfo };
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const createAd = async () => {
    await create(title, description, price, 'no image', userData.id);
    navigate(ADS_ROUTE);
  };

  return (
    <>
      <h1>Создание объявления</h1>
      <div>
        <h3>Название</h3>
        <input value={title} placeholder="Название" onChange={(e) => setTitle(e.target.value)} />
        <h3>Описание</h3>
        <input value={description} placeholder="Описание" onChange={(e) => setDescription(e.target.value)} />
        <h3>Цена</h3>
        <input value={price} placeholder="Цена" onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button onClick={() => createAd()}>Создать объявление</button>
    </>
  );
};

export default CreatureAd;
