import React from 'react';
import Address from "./components/Address";
import Battery from "./components/Battery";

function App() {

  return (
    <div className="App">
      <h2>Как много JavaScript может знать о тебе?</h2>
      <h3>Давай проверим!</h3>
      <Address/>
      <br/>
      <Battery/>
    </div>
  );
}

export default App;
