import React, {useState} from "react";

const Address = () => {

  async function ip() {
    let rest = await fetch('https://api.db-ip.com/v2/free/self');
    let data = await rest.json();
    return data;
  }

  const [checkIp, setCheckIp] = useState('City');

  ip().then(data => {
    const timer = setTimeout(() => {
      setCheckIp(data);
      console.log(data);
    }, 60000)
  })  // исправить оптимизацию, непрерывно летят запросы с сервера, сейчас раз в минуту из-за таймера

  //city: "Krasnodar"
  // continentCode: "EU"
  // continentName: "Europe"
  // countryCode: "RU"
  // countryName: "Russia"
  // ipAddress: "91.210.45.53"
  // stateProv: "Krasnodarskiy"

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