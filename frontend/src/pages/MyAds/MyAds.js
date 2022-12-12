import React, { useState, useEffect, useContext } from 'react';
import { getUserAds } from '../../API/adAPI';
import AdSlot from '../../components/AdSlot/AdSlot';
import { Context } from '../../index';
import './MyAdsStyles.css';
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
      <div className='myAdsTitle'>Мои объявления</div>
      <div className='myAdsContainer'>
      {ads.map((ad, index) => (
        <AdSlot ad={ad} key={index} />
      ))}
      </div>
    </div>
  );
};

export default MyAds;
