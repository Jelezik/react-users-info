import React from 'react';
/* eslint-disable no-restricted-globals */

const History = () => {
  const ret = () => {
    if (document.referrer === '') {
      return "None"
    } else {
      return document.referrer;
    }
  }
  return (
    <div>
      <p>Откуда вы сюда перешли: {ret()}</p>
      <p>Длина пройденных сайтов до этого: {history.length}</p>

    </div>
  );
};

export default History;