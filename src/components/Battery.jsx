import React, {useEffect, useState} from 'react';

const Battery = () => {

 async function batteryInfo() {
    let data = await navigator.getBattery();
    return data;
  }

  const [checkBattery, setCheckBattery] = useState('Information Battery');

  useEffect(() => {
    batteryInfo().then(data => {
      if (checkBattery === 'Information Battery') {
      setCheckBattery(data);
      }
    })
  })

  let chargeInfo = '';
  const chargeFunction = () => {
    if (checkBattery.charging === true) {
      chargeInfo = "Да";
    }
    else {
      chargeInfo = "Нет";
    }
 }
 chargeFunction()

  return (
    <div>
      <p>Идет ли зарядка устройста: {chargeInfo}</p>
      <p>Время зарядки: {checkBattery.chargingTime}</p>
      <p>Время разрядки: {checkBattery.dischargingTime}</p>
      <p>Уровень заряда: {checkBattery.level * 100}</p>
    </div>
  );
};

export default Battery;