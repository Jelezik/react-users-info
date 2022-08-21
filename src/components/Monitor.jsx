import React from 'react';
/* eslint-disable no-restricted-globals */

const Monitor = () => {

  return (
    <div>
      <p>Информация о разрешении экрана:</p>
      <p>Высота экрана: {screen.height}</p>
      <p>Ширина экрана: {screen.width}</p>
      <p>Клиентская высота: {document.body.clientHeight}</p>
      <p>Клиентская ширина: {document.body.clientWidth}</p>
      <p>Высота окна: {window.innerHeight}</p>
      <p>Ширина окна: {window.innerWidth}</p>
      <p>Доступная высота: {screen.availHeight}</p>
      <p>Доступная ширина: {screen.availWidth}</p>
      <p>Глубина цвета: {screen.colorDepth}</p>
      <p>Глубина пикселей: {screen.pixelDepth}</p>
    </div>
  );
};

export default Monitor;