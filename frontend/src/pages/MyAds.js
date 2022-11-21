import React, { useState, useEffect, useContext } from 'react';
import { getUserAds } from '../API/adAPI';
import AdSlot from '../components/AdSlot/AdSlot';
import { Context } from '../index';

const MyAds = () => {
  const [ads, setAds] = useState([]);
  const [update] = useState(true);
  const { user } = useContext(Context);
  const userData = { ...user.userInfo };

  useEffect(() => {
    async function getAds() {
      const data = await getUserAds(userData.id);
      setAds(data);
    }
    getAds();
  }, [update]);

  return (
    <div>
      Мои объявления
      {ads.map((ad, index) => (
        <AdSlot ad={ad} key={index} />
      ))}
    </div>
  );
};

export default MyAds;
