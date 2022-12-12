import React, {useState, useEffect} from 'react';
import { getAll } from '../../API/adAPI';
import AdSlot from '../../components/AdSlot/AdSlot';
import './AdsStyles.css';
const Ads = () => {
  const [ads, setAds] = useState([]);
  const [update] = useState(true);

  useEffect(() => {
    async function getAds() {
      const data = await getAll();
      setAds(data);
    }
    getAds();
  }, [update]);

  return (
    <div>
      <div className='adsTitle'>Рекомендации для вас</div>
      <div className="adsContainer">
        {ads.map((ad, index) => (
          <AdSlot ad={ad} key={index} />
        ))}
      </div>
    </div>
    );
};

export default Ads;
