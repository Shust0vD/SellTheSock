import React, {useState, useEffect} from 'react';
import { getAll } from '../API/adAPI';
import AdSlot from '../components/AdSlot/AdSlot';

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
      List of ADDS
      {ads.map((ad, index) => (
        <AdSlot ad={ad} key={index} />
      ))}
    </div>
    );
};

export default Ads;
