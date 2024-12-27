import React from 'react';
import BarcodeScannerComponent from "./BarcodeScannerComponent";

const App = () => {
  return (
    <div>
      <h1>Сканер штрихкодов</h1>
      <div style={{width: '300px', height: '150px'}}><BarcodeScannerComponent /></div>
    </div>
  );
};

export default App;
