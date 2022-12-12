import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getOne } from '../API/adAPI';
import { getUserInfo } from '../API/userAPI';
import { Context } from '../index';

const OneAd = () => {
  const [adInfo, setAdInfo] = useState();
  const [userInfo, setUserInfo] = useState();
  const [update] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    async function getAdInfo() {
      await getOne(id).then(async (info) => {
        setAdInfo(info);
        const userData = await getUserInfo(info.userId);
        setUserInfo(userData);
      });
    }
    getAdInfo();
  }, [update]);

  return (
    <div>
      {adInfo && userInfo && (
        <>
          <h2>Название: </h2>
          {adInfo.title}
          <h2>Описание: </h2>
          {adInfo.description}
          <h2>Цена: </h2>
          {adInfo.price}
          <h2>Дата: </h2>
          {adInfo.createdAt}
          <h3>Продавец: {userInfo.username}</h3>
          {userInfo.phoneNumber && <h3>Номер телефона: {userInfo.phoneNumber}</h3>}
        </>
      )}
    </div>
  );
};

export default OneAd;
