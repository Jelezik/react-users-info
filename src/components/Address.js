import React, {useEffect, useState} from "react";

const Address = () => {

  async function ip() {
    let rest = await fetch('https://api.db-ip.com/v2/free/self');
    let data = await rest.json();
    return data;
  }

  const [checkIp, setCheckIp] = useState('City');

  useEffect(() =>  {ip().then(data => {
      if (checkIp === 'City') {
        setCheckIp(data);
      }})});

  return (
    <div>
      <p>Континент: {checkIp.continentName}</p>
      <p>Название страны: {checkIp.countryName}</p>
      <p>Край/Область: {checkIp.stateProv}</p>
      <p>Город: {checkIp.city}</p>
      <p>Ip адрес: {checkIp.ipAddress}</p>
    </div>
  );
};

export default Address;