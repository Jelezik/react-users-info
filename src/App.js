import React from 'react';
import Address from "./components/Address";
import Battery from "./components/Battery";
import Coords from "./components/Coords";

function App() {

  return (
    <div className="App">
      <h2>Как много JavaScript может знать о тебе?</h2>
      <h3>Давай проверим!</h3>
      <Address/>
      <br/>
      <Battery/>
      <br/>
      <Coords/>
    </div>
  );
}

export default App;
