import React, {useEffect, useState} from 'react';

const Browser = () => {
  const [con, setCon] = useState('Connection type');
  const [usb, setUsb] = useState("Usb status");
  const [usersAgent, setUsersAgent] = useState('User Agent Data')

  async function agentData() {
    return await navigator.userAgentData;
  }

  useEffect(() => {
    if (usersAgent === 'User Agent Data') {
      agentData().then(data => {
        setUsersAgent(data); //Проверить чтобы не уходило в цикл!
      })
    }
  })

  async function usbCheck() {
    return await navigator.usb;
  }

  useEffect(() => {
    if (usb === "Usb status") {
      usbCheck().then(data => {
        setUsb(data);
      })
    }
  });

  async function connections() {
    return await navigator.connection;
  }

  useEffect(() => {
    if (con === 'Connection type') {
      connections().then(data => {
        setCon(data);
      });
    }
  });

  const getCookies =
    navigator.cookieEnabled === true ? "true" : "false";

  let navMas = navigator.languages;
  let langMas = navMas.join(", ");

  return (
    <div>
      Общая информация с браузера:
      <p>Вендор: {navigator.vendor}</p>
      <p>Браузер: {navigator.appCodeName}</p>
      <p>Название приложения: {navigator.appName}</p>
      <p>Операционная система: {navigator.appVersion}</p>
      <p>Включены ли куки: {getCookies}</p>
      <p>Оперативная память ПК: {navigator.deviceMemory}gb</p>
      <p>Раскладки языков: {langMas}</p>
      <p>Просмотр PDF: {navigator.pdfViewerEnabled === true ? "true" : "false"}</p>
      <p>Платформа: {navigator.platform}</p>
      <p>Продукт: {navigator.product}</p>
      <p>ID продукта: {navigator.productSub}</p>
      <p>Статус USB (если пусто - значение null): {usb.onconnect} {usb.ondisconnect}</p>
      <p>Является ли устройство телефоном: {usersAgent === true ? "true" : "false"}</p>
      <p>Платформа {navigator.platform}</p>
      <p>Информация о интернет соединении:</p>
      <p>Канал: {con.downlink}</p>
      <p>Тип сети: {con.effectiveType}</p>
      <p>RTT: {con.rtt}</p>
    </div>
  );
};

export default Browser;